import contextlib
from dataclasses import asdict

import scrapy
from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
from scrapy.http import TextResponse

from dailyrentalads.parsing import parse_ad_page_html


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
            ad = parse_ad_page_html(response.body)
            with contextlib.suppress(DuplicateKeyError):
                self.db.rentals.insert_one(asdict(ad))
                yield ad

        next_page = response.css(".next a")

        if next_page:
            yield response.follow(next_page[0], callback=self.parse)


if __name__ == '__main__':
    ...
