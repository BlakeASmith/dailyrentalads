import dataclasses

import pytest

import dailyrentalads.parsing
from dailyrentalads.utils import uri_for_file


@pytest.fixture
def html_files(tests_root_dir):
    return list((tests_root_dir / "html" / "usedvictoria").glob("*.html"))


def test_parse_ad(html_files, data_regression):
    data = []
    for html in html_files:
        ad = dailyrentalads.parsing.parse_ad_page_html(
            uri_for_file(html), html.read_text())

        data.append(dataclasses.asdict(ad))

    data_regression.check(data)
