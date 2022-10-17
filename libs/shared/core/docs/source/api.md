# Table of Contents

* [core](#core)
* [core.logging](#core.logging)
  * [setup\_logging](#core.logging.setup_logging)
* [core.time](#core.time)
  * [current\_milli\_time](#core.time.current_milli_time)

<a id="core"></a>

# core

Shared Core.

<a id="core.logging"></a>

# core.logging

Logging module.

<a id="core.logging.setup_logging"></a>

#### setup\_logging

```python
def setup_logging(
    module_name: str,
    propagate: bool = False,
    log_level: str = os.getenv("LOG_LEVEL", "INFO").upper()
) -> logging.Logger
```

Set up logging using JSON format.

**Arguments**:

- `module_name` _str_ - The module name.
- `propagate` _bool_ - Whether to propagate the logging to the parent logger.
- `log_level` _str_ - The log level.
  

**Returns**:

  The logger.

<a id="core.time"></a>

# core.time

Time utils module.

<a id="core.time.current_milli_time"></a>

#### current\_milli\_time

```python
def current_milli_time() -> int
```

Get the current time with milliseconds.

