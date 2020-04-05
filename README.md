<div align="center">

<h1 align="center">Arkitektjs Helper</h1>

[![Arkitektjs](https://circleci.com/gh/Arkitektjs/Helper.svg?style=shield)](https://github.com/Arkitektjs/Helper)

[![Coverage Status](https://coveralls.io/repos/github/Arkitektjs/Helper/badge.svg?branch=master)](https://coveralls.io/github/Arkitektjs/Helper?branch=master)

</div>

## Installation & Usage

#### Installation

```
npm install @arkitektjs/helper
```

#### Usage

```
const get = require('@arkitektjs/helper');

const isString = get('isString');
console.log(isString('my string'));

const randomColor = get('randomColor');
console.log(randomColor());


const toSlug = require('@arkitektjs/helper/src/toSlugHelper');
console.log(toSlug('string to slug'));
```

### Documentation

Coming soon :)

### Contributing

Coming soon :)



## License

Arkitektjs Helper is [MIT Licensed](LICENSE).
