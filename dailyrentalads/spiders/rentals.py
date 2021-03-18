import contextlib
import re

import scrapy
from bs4 import BeautifulSoup
from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
from scrapy.http import TextResponse

from dailyrentalads.parsing import parse_title, sanitize_attr, boolify

title_regex = re.compile(r"\$(\d+,?\d+)\W*(.*)")


class RentalSpider(scrapy.Spider):
    name = "rentals"

    def __init__(self):
        super(RentalSpider, self).__init__()
        self.db = MongoClient()["ads"]
        self.max_pages = 400
        self.n_pages = 0

    def start_requests(self):
        yield scrapy.Request("https://www.usedvictoria.com/classifieds/real-estate-rentals", callback=self.parse)

    def parse(self, response: TextResponse, **kwargs):
        if self.n_pages == self.max_pages:
            return

        self.n_pages += 1

        links = response.css("#recent p.title > a::attr(href)").extract()

        if links:
            for link in links:
                if self.db.rentals.find({"_id": link}, {"_id": 1}).count() == 0:
                    yield response.follow(link, callback=self.parse)
        else:
            soup = BeautifulSoup(response.body)

            unparsed_title = soup.find(class_="adshead").h1.text
            price, title = parse_title(unparsed_title)

            attrs_box = soup.find(id="useditem-attribute")

            attrs = {sanitize_attr(k.text): boolify(v.text) for k, v in
                     zip(attrs_box.find_all("h4"), attrs_box.find_all("span"))}

            ad = {
                "_id": response.url,
                "url": response.url,
                "title": title,
                "price": price,
                **attrs
            }

            with contextlib.suppress(DuplicateKeyError):
                self.db.rentals.insert_one(ad)
                yield ad

        next_page = response.css(".next a")

        if next_page:
            yield response.follow(next_page[0], callback=self.parse)


if __name__ == '__main__':
    print(parse_title("$1,900 · Newly renovated 2-Bedroom, 1-Bathroom suite"))
    ...
