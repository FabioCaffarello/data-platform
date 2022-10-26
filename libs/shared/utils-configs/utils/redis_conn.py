"""Redis connection module."""
import redis


def connection():
    """Redis connection."""
    conn = redis.Redis(
        host='redis',
        port='6379',
        db=0,
        decode_responses=True
    )

    return conn
