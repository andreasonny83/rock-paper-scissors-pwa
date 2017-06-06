# Rock Paper Scissors

> Progressive WebApp of the old fashion game

[![Build Status](https://travis-ci.org/andreasonny83/rock-paper-scissors-pwa.svg?branch=master)](https://travis-ci.org/andreasonny83/rock-paper-scissors-pwa)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

WebApp running live at [rock-paper-scissors-pwa.firebaseapp.com](https://rock-paper-scissors-pwa.firebaseapp.com/)

## Table of Contents

*   [Prerequisites](#prerequisites)
*   [Installation](#installation)
*   [Serving the app locally](#serving-the-app-locally)
*   [Running the tests](#running-the-tests)
*   [E2E tests](#e2e-tests)
*   [Creating a build](#creating-a-build)
*   [Deploying live](#deploying-live)
*   [Contributing](#contributing)
*   [Changelog](#changelog)
*   [License](#license)

## Prerequisites

The project has dependencies that require Node 6.9.0 or higher, together
with NPM 3 or higher.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To take advantage of this app you need to:

1.  Get a copy of the code.
1.  Install the dependencies if you don't already have them.
1.  Modify the application to your liking.
1.  Deploy your production code.

### Get the code

Clone this repository on your local machine with:

```sh
$ git clone https://github.com/andreasonny83/rock-paper-scissors-pwa.git
```

### Install all the dependencies

Install all the NPM dependencies with:

```bash
$ npm install

# Or using Yarn for a faster installation
$ yarn install
```

**NOTE:** When using Yarn, it may be required to run:

```sh
$ npm rebuild phantomjs-prebuilt node-sass
```

This is due to a known issue reported on [node-sass](https://github.com/sass/node-sass/issues/1804)

## Serving the app locally

Run `npm start` for a dev server.
Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Running the tests

Run `npm test` to execute the unit and integration tests using [Karma](https://karma-runner.github.io).

## E2E tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Creating a build

Run `npm run build` to build the project.
The build artifacts will be stored in the `dist/` directory.

## Deploying live

### Prerequisites

1. Create a free Firebase account at https://firebase.google.com
1. Create a project from your [Firebase account console](https://console.firebase.google.com)
1. Configure the authentication providers for your Firebase project from your Firebase account console

### Configure this app with your project-specific details

```javascript
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```

### Install firebase-tools

```sh
$ npm install -g firebase-tools
```

### Build and deploy the app

```sh
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```

## Contributing

This package is using the Angular commit messages as default way to contribute
with [Commitizen node package](https://github.com/commitizen/cz-cli/blob/master/README.md)
integrated in this repository.

1.  Fork it!
1.  Create your feature branch: `git checkout -b my-new-feature`
1.  Add your changes: `git add .`
1.  Commit your changes: `npm run commit`
1.  Push to the branch: `git push origin my-new-feature`
1.  Submit a pull request :sunglasses:

## Changelog

Changelog available [here](https://github.com/andreasonny83/rock-paper-scissors-pwa/releases)

## License

[MIT License](https://github.com/andreasonny83/rock-paper-scissors-pwa/blob/master/LICENSE) © Andrea SonnY
