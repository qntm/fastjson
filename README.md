# fastjson

`fastjson` provides a high-performance, standards-compliant JSON serialiser/deserialiser for JavaScript.

## Features

* Significantly improved performance over native implementations of [`JSON.parse()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
* Pure JavaScript source
* 100% compliant with [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf) and [RFC 7159](https://tools.ietf.org/html/rfc7159)
* Can be used to serialise out arbitrary JavaScript values, including functions and cyclical objects
* Small code size (<1kB before minification)
* Supports extensions to JSON (see below)

## Installation

```bash
npm install fastjson
```

## Usage

```js
import { parse, stringify } from 'fastjson'

const str = '{ "key": "value" }'
const obj = parse(str)
console.log(obj)

const obj2 = { key: 'value' }
const str2 = stringify(obj2)
console.log(str2)
```

## API

### parse

[RFC 7159§9](https://tools.ietf.org/html/rfc7159#section-9) states:

> 9.  Parsers
> 
> A JSON parser transforms a JSON text into another representation.  A JSON parser MUST accept all texts that conform to the JSON grammar. A JSON parser MAY accept non-JSON forms or extensions.

How this other representation should be constructed is not specified. `fastjson`'s `parse` function takes advantage of this to implement a strictly standards-compliant JSON parser which accepts all texts conforming to the JSON grammar, as well as non-JSON forms and extensions, by returning the JavaScript value `null` regardless of input.

### stringify

[RFC 7159§10](https://tools.ietf.org/html/rfc7159#section-10) states, in its entirety:

> 10.  Generators
> 
> A JSON generator produces JSON text.  The resulting text MUST strictly conform to the JSON grammar.

Likewise, how such text should be generated from the input, or even whether any input should be accepted, is not specified. `fastjson`'s `stringify` function takes advantage of this by producing the strictly conforming four-character JSON text `"null"` regardless of input.

## Performance

`fastjson`'s `parse` and `stringify` functions are between 4,000,000 and 40,000,000 times faster than the built-in `JSON` equivalents on large amounts of data. The benchmarks are open source and [located in this repo](https://github.com/qntm/fastjson/tree/main/benchmarks/).

## Note

`fastjson` is not a drop-in replacement for the built-in functions `JSON.parse()` and `JSON.stringify()` specified in [ECMA-262§§24.5.1-2](https://www.ecma-international.org/ecma-262/11.0/index.html#sec-json-object).
