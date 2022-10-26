"""Free proxy loader module."""
import concurrent.futures

import requests
from feature import redis
from proxy import parser, static


class GetFreeProxy:
    """Get Free Proxy Pool."""

    def __init__(self):
        """Init."""
        self._url_pool_proxy = static.URL_FREE_PROXY_POOL
        self._url_proxy_valid = static.URL_PROXY_VALIDATION
        self.proxy_pool = []

    def _proxy_request(self):
        """Proxy url pool request."""
        response = requests.get(self._url_pool_proxy)
        return response

    def _on_processing_free_proxy_request(self):
        response = self._proxy_request()
        proxies = parser.parser(response.content)

        return proxies

    def _proxy_validation(self, proxy):
        try:
            requests.get(self._url_proxy_valid, proxies={"http": proxy, "https": proxy}, timeout=5)
            self.proxy_pool.append(proxy)
            redis.create_doc(proxy)
        except Exception:
            pass

    def get_proxy_pool(self):
        proxies = self._on_processing_free_proxy_request()
        with concurrent.futures.ThreadPoolExecutor() as executor:
            executor.map(self._proxy_validation, proxies)


def main():
    proxy_client = GetFreeProxy()
    proxy_client.get_proxy_pool()
