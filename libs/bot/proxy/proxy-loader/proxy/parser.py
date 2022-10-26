"""Parser Module."""
from bs4 import BeautifulSoup


def parser(raw_data):
    soup = BeautifulSoup(raw_data, "html.parser")
    proxies = list()
    proxy_table = soup.find(
        "table",
        attrs={
            "class": "table table-striped table-bordered"
        }
    ).find_all("tr")[1:]
    for row in proxy_table:
        tds = row.find_all("td")
        try:
            ip = tds[0].text.strip()
            port = tds[1].text.strip()
            proxies.append(f"http://{str(ip)}:{str(port)}")

        except IndexError:
            continue
    return proxies
