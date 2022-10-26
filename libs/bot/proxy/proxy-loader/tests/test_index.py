from proxy import index


def test_index():
    assert index.hello() == "Hello bot-proxy-proxy-loader"
