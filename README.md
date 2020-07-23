# PPTX Generator

Small application for generating .pptx from a form made in ReactJS.

## Prerequisites

- Python 3.x
- Virtualenv
- NodeJS 12.x
- NPM or Yarn (preferred)

## Setup and usage

### API

1.  Go to `api` folder and run the following commands to generate and activate virtualenv:

    ```bash
    virtualenv .venv
    source .venv/bin/activate
    ```

2.  Install the dependencies:

    ```bash
    pip -r requirements.txt
    ```

3.  Generate your configuration file (`.env`):

    ```bash
    cp .env.example .env
    ```

4.  Run the API:

    ```bash
    flask run
    ```

### UI

1.  Go to `ui` folder and run the following command to install the dependencies:

```bash
yarn
```

2.  Run the project by:

```bash
yarn start
```

### TODO

Check [TODO.md](./TODO.md) for more information
