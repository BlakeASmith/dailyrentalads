import re

from bs4 import BeautifulSoup

from dailyrentalads.filter import RentalAd


def parse_ad_page_html(url, html) -> RentalAd:
    soup = BeautifulSoup(html)

    raw_title = soup.find(class_="adshead").h1.text
    price, title = parse_title(raw_title)

    attrs_box = soup.find(id="useditem-attribute")

    if attrs_box:
        attrs = {k.text: v.text for k, v in
                 zip(attrs_box.find_all("h4"), attrs_box.find_all("span"))}

        attrs = {sanitize_attr(k): try_coerce_to_bool(v) for k, v in attrs.items()}
    else:
        attrs = {}

    desc = soup.find(id="useditem-description").p.text

    return RentalAd(
        url=url,
        title=title,
        description=desc,
        price=price,
        beds=attrs["bed"] if "bed" in attrs else None,
        baths=attrs["bath"] if "bath" in attrs else None,
        pets=attrs["pets"] if "pets" in attrs else None,
        smoking=attrs["smoking"] if "smoking" in attrs else None,
        wanted="WANTED" in raw_title,
    )


title_regex = re.compile(r"\$(\d+,?\d+)\W*(.*)")


def parse_title(title):
    title = title.lstrip("\n\n\uf004\n\nLog In needed\n")
    title = title.lstrip("WANTED: ")

    price_loc = title.find("$")

    if price_loc == -1:
        return None, title

    title = title[title.find("$"):]
    m = title_regex.match(title)
    if m:
        price, title = m.groups()
        price = filter(lambda c: c != ",", price)
        return int("".join(price)), title

    return None, title


def sanitize_attr(key):
    return key.replace("#", "").replace(" ", "").lower()


def try_coerce_to_bool(string):
    if string.lower() == "yes":
        return True
    if string.lower() == "no":
        return False

    return string
