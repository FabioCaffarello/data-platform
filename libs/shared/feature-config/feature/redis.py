"""Redis Features."""
from utils import redis_conn as conn


def create_doc(collection, doc):
    """
    Create a document into Redis Collection.

    Args:
        collection (str): The collection name.
        doc (str): The doc to be added.

    Returns:
        The redis created doc.
    """
    _conn = conn.connection()

    return _conn.zadd(collection, {doc: 0})
