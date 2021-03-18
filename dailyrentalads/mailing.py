import yagmail

server = yagmail.SMTP("dailyrentalads@gmail.com")


def send_ads_email(email, ads):
    server.send(email, "Today's Rental Ads", "\n".join(ad.url for ad in ads))


