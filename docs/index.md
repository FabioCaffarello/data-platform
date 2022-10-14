# Getting Started

This repository is a monorepo for data platform solution.

## Requirements

Install the following softwares

- [node.js 16.x](https://nodejs.org/en/download/)
- [poetry](https://pypi.org/project/poetry/1.2.0b2/)

```shell
pip install poetry==1.2.0b3
```

> Installation using [pipx](https://pypa.github.io/pipx/installation/) is strongly recommended.

## Install dependencies

```shell
npm install
```

```shell
poetry install
```

```shell
poetry run pre-commit install
```

## Terminal virtual environment

```shell
poetry shell
```

## Run Flake8 Linting

```shell
npx nx affected:lint
```

or for a specific project

```shell
npx nx lint <appName>
```

## Add new dependency

```shell
npx nx run <appName>:add --name <dependencyName>==<dependencyVersion>
```

Example:

```shell
npx nx run core:add --name requests=2.27.1
```

## Add new local dependency

```shell
npx nx run <appName>:add --name <dependencyName> --local
```

Example:

```shell
npx nx run core:add --name development --local
```

Using the Nx wrapper to adding a dependency ensure that both root `poetry.lock` and project `poetry.lock` are updated.
