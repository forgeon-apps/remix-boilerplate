# Remix

This directory is a brief example of a [Remix](https://remix.run/docs) site that can be deployed to Forgeon with zero configuration.

To get started, run the Remix cli with this template

```sh
npx create-remix@latest --template forgeon/forgeon/examples/remix
```

## Deploy Your Own

Deploy your own Remix project with Forgeon.

Deploy the example using [Forgeon](https://forgeon.io?utm_source=github&utm_medium=readme&utm_campaign=forgeon-examples):

[![Deploy with Forgeon](https://forgeon.io/images/button-deploy/png/deploy-to-forgeon-6.png)](https://forgeon.io/projects?import=1&no_upload=1&auto=0&git_url=https%3A%2F%2Fgithub.com%2Fforgeon-apps%2Fremix-boilerplate)


_Live Example: https://remix-run-template.forgeon.app_

You can also deploy using the [Forgeon CLI](https://forgeon.io/docs/cli):

```sh
npm i -g forgeon
forgeon
```

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:5173](http://localhost:5173) and you should be ready to go!
