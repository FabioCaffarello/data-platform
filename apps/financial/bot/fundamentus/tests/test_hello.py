"""bot.hello tests."""

from bot import hello


def test_index():
    """Hello Tests."""
    assert hello.hello() == "Hello financial-bot-fundamentus"
