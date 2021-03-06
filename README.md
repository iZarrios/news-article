# news-article using meaningcloud 


## Table of Contents

- [Summary](#Summary)

- [Technologies](#Technologies)

- [Features](#Features)

- [Structure](#Structure)

- [Usage and Installation](#usage-and-installation)

## Summary

news-article was built to practice front end development and Webpack as part of my udacity nanodegree.

Webpack was the buildtool of choice and was configured according to the project requirements.

It demonstrates my understanding of Webpack, Webpack's loaders, Webpack's plugins, Preprocessed styles (Sass) and NodeJS.

## Technologies

Webpack was used as the buildtool.
Jester was used for the unit-testing.
HTML, CSS, JS, SASS used for the front end.
Axios was used to handle web requests in the backend.

## Features

1. NodeJS backend configured with DotEnv to retrieve.

2. NodeJS backend configured with Axios to make web requests to the API.

3. Webpack configured with loaders and plugins for the buildtool.

4. Validate the input using regular expressions to make sure the link is valid.

5. Display sentiment (Agreement, Subjectivity, Confidence, Irony) from MeaningCloud.

6. Implemented service workers to serve cached versions of the website.

7. Implemented unit testing for the javascript functions using Jester.

## Structure

```
|   .babelrc
|   package-lock.json
|   package.json
|   Showcase.gif
|   webpack.dev.js
|   webpack.prod.js
|
+---src
|   +---client
|   |   |   index.js
|   |   |
|   |   +---images
|   |   |       favicon.png
|   |   |       logo.png
|   |   |       robot.gif
|   |   |
|   |   +---js
|   |   |       handleSubmit.js
|   |   |       linkChecker.js
|   |   |
|   |   +---styles
|   |   |       base.scss
|   |   |       footer.scss
|   |   |       form.scss
|   |   |       header.scss
|   |   |       resets.scss
|   |   |
|   |   \---views
|   |           index.html
|   |
|   \---server
|           index.js
|           mockAPI.js
|
\---_test_
        testFormHandler.spec.js
        testLinkChecker.spec.js

```

## Usage and Installation

You can get the project up and running in 3 simple steps.

1. Use the following command to install the required packages

```
npm install
```

2. Use the following command to build the project using webpack

```
npm run build-prod
```

Alternatively a development build is also available using

```
npm run build-dev
```

3. Use the following command to run the server

```
npm start
```
# news-article

