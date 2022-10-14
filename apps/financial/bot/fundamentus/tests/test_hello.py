from bot import hello


def test_index():
    assert hello.hello() == "Hello financial-bot-fundamentus"
