from dataclasses import dataclass
from typing import Tuple, Iterable


@dataclass
class RentalAd:
    url: str
    title: str
    price: int
    beds: float
    baths: float
    pets: bool
    smoking: bool
    _id: str = None

    def __post_init__(self):
        self._id = self.url

    @classmethod
    def from_scraped_ad(cls, scraped_ad: dict):
        return cls(scraped_ad["url"],
                   scraped_ad["title"],
                   int(scraped_ad["price"]),
                   float(scraped_ad["bed"]),
                   float(scraped_ad["bath"]),
                   bool(scraped_ad["pets"]),
                   bool(scraped_ad["smoking"]))


@dataclass
class RentalAdQuery:
    beds: Tuple[int, int] = None
    baths: Tuple[int, int] = None
    price: Tuple[int, int] = None
    keywords: Iterable[str] = None
    pets: bool = None
    smoking: bool = None
    _id: str = None

    def __post_init__(self):
        if not self._id:
            self._id = str(self)

    def match(self, ad: RentalAd):
        return ad is not None and all((
            self.baths is None or (self.baths[0] <= ad.baths <= self.baths[1]),
            self.beds is None or self.beds[0] <= ad.beds <= self.beds[1],
            self.price is None or self.price[0] <= ad.price <= self.price[1],
            self.pets is None or (self.pets == ad.pets),
            self.smoking is None or (self.smoking == ad.smoking),
            self.keywords is None or all(keyword in ad.title for keyword in self.keywords)
        ))

    def matching(self, ads: Iterable[RentalAd]):
        return [ad for ad in ads if self.match(ad) if ad is not None]