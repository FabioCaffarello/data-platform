# Table of Contents

* [development](#development)
* [development.hooks.report](#development.hooks.report)
  * [pytest\_html\_results\_table\_header](#development.hooks.report.pytest_html_results_table_header)
  * [pytest\_html\_results\_table\_row](#development.hooks.report.pytest_html_results_table_row)
  * [pytest\_runtest\_makereport](#development.hooks.report.pytest_runtest_makereport)
* [development.hooks](#development.hooks)

<a id="development"></a>

# development

Shared Unit Test and Development.

<a id="development.hooks.report"></a>

# development.hooks.report

Pytest hook to add description to the HTML report.

<a id="development.hooks.report.pytest_html_results_table_header"></a>

#### pytest\_html\_results\_table\_header

```python
def pytest_html_results_table_header(cells)
```

Add header to the HTML report.

<a id="development.hooks.report.pytest_html_results_table_row"></a>

#### pytest\_html\_results\_table\_row

```python
def pytest_html_results_table_row(report, cells)
```

Add Row to the HTML report.

<a id="development.hooks.report.pytest_runtest_makereport"></a>

#### pytest\_runtest\_makereport

```python
@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item, call)
```

Add description to the HTML report.

<a id="development.hooks"></a>

# development.hooks

Hooks Reports Module.

