import logging
import os
import time
from contextlib import suppress
from dataclasses import asdict
from functools import wraps

import schedule
from pymongo import MongoClient

from dailyrentalads import mailing, users
from dailyrentalads.filter import RentalAdQuery, RentalAd

logger = logging.getLogger(__name__)
db = MongoClient()["ads"]


def ignore_key_error(f):
    @wraps(f)
    def _f(*args, **kwargs):
        with suppress(KeyError, TypeError):
            return f(*args, **kwargs)

    return _f


def serve_queries_for_user(user):
    queries = user["queries"]

    if "seen" in user:
        user["seen"] = set(user["seen"])
    else:
        user["seen"] = set()

    for query in queries:
        query = db.queries.find_one({"_id": query})
        del query["_id"]
        query = RentalAdQuery(**query)

        get_ad = ignore_key_error(RentalAd.from_scraped_ad)

        ads = (get_ad(ad) for ad in db.rentals.find())

        matches = query.matching(ads)

        new_ads = []
        for match in matches:
            if match.url not in user["seen"]:
                new_ads.append(match)

        if new_ads:
            mailing.send_ads_email(user["_id"], ads=new_ads)

        db.users.update_one({"_id": user["_id"]}, {
            "$push": {
                "seen": {
                    "$each": [m.url for m in matches]
                }
            }
        })


def setup_my_user():
    email = "blakeinvictoria@gmail.com"
    user = db.users.find_one({"_id": email})

    if not user:
        my_query = asdict(RentalAdQuery(
            beds=(2, 3),
            baths=(1, 3),
            price=(0, 2000),
            pets=True,
        ))

        db.queries.insert_one(my_query)

        db.users.insert_one(users.make_user(email, queries=[my_query["_id"]]))
        user = db.users.find_one({"_id": email})

        logger.info(f"created user {user}")

    return user


def setup_standard_queries():
    all_ = db.queries.find_one({"_id": "all"})
    if not all_:
        blank_query = asdict(RentalAdQuery())
        blank_query["_id"] = "all"
        db.queries.insert_one(blank_query)


def serve_queries_for_all_users():
    for user in db.users.find():
        logger.info(f"Serving quieries for {user}")
        serve_queries_for_user(user)


def scrape_ads_from_used_victoria():
    os.system("poetry run scrapy crawl rentals")


def main():
    logging.basicConfig(level=logging.INFO)
    setup_my_user()

    scrape_ads_from_used_victoria()
    serve_queries_for_all_users()

    logger.info("Scheduling query service.")
    schedule.every().day.do(serve_queries_for_all_users)
    logger.info("Scheduling scraping service")
    schedule.every(3).hours.do(scrape_ads_from_used_victoria)

    while True:
        schedule.run_pending()
        time.sleep(1)


if __name__ == "__main__":
    main()
