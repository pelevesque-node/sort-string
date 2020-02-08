[![Build Status](https://travis-ci.org/pelevesque/sort-string.svg?branch=master)](https://travis-ci.org/pelevesque/sort-string)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/sort-string/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/sort-string?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# sort-string

Sorts a string alphanumerically.

## Node Repository

https://www.npmjs.com/package/@pelevesque/sort-string

## Installation

`npm install @pelevesque/sort-string`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

```js
const sortString = require('@pelevesque/sort-string')
```

```js
const str = '321bca321'
const result = sortString(str)
// result === '112233abc'
```
