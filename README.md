<div align="center">

<h1 align="center">DeltaRM Helper</h1>

[![DeltaRM](https://circleci.com/gh/DeltaRM/helper.svg?style=shield)](https://github.com/DeltaRM/helper)
[![Coverage Status](https://coveralls.io/repos/github/DeltaRM/Helper/badge.svg?branch=master)](https://coveralls.io/github/DeltaRM/Helper?branch=master)
[![npm version](https://badge.fury.io/js/%40deltarm%2Fhelper.svg)](https://badge.fury.io/js/%40deltarm%2Fhelper)
</div>

Useful functions to increase your productivity 

## Installation & Usage

#### Installation

```
npm install @deltarm/helper
```

#### Usage

```
const get = require('@deltarm/helper');

const isString = get('isString');
console.log(isString('my string'));

const randomColor = get('randomColor');
console.log(randomColor());


const toSlug = require('@deltarm/helper/src/toSlugHelper');
console.log(toSlug('string to slug'));
```

## Documentation

Coming soon :)

## Contributing

Read more about our [Contributing Guidelines](CONTRIBUTING.md).

## Security Policy

Read more about our [Security Policy](SECURITY.md).

## License

DeltaRM Helper is [MIT Licensed](LICENSE).
