from bs4 import BeautifulSoup

from dailyrentalads.filter import RentalAd
from dailyrentalads.spiders.rentals import title_regex


def parse_ad_page_html(html) -> RentalAd:
    soup = BeautifulSoup(html)

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


def parse_title(title):
    title = title[title.find("$"):]
    m = title_regex.match(title)
    if m:
        price, title = m.groups()
        price = filter(lambda c: c != ",", price)
        return int("".join(price)), title
    return None, title


def sanitize_attr(key):
    return key.replace("#", "").replace(" ", "").lower()


def boolify(string):
    if string.lower() == "yes":
        return True
    if string.lower() == "no":
        return False

    return string
