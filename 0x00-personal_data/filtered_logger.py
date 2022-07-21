#!/usr/bin/env python3
""" Regex-ing
"""


from re import sub
from typing import List


def filter_datum(
    fields: List[str],
    redaction: str,
    message: str,
    separator: str
) -> str:
    """ that returns the log message obfuscated
    """
    for field in fields:
        log_msg = sub(field + '=.*?' + separator,
                      field + '=' + redaction + separator,
                      message)
        return log_msg
