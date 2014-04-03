# d3-helpers

> Little utility D3 functions

[![NPM][d3-helpers-icon] ][d3-helpers-url]

[![Build status][d3-helpers-ci-image] ][d3-helpers-ci-url]
[![dependencies][d3-helpers-dependencies-image] ][d3-helpers-dependencies-url]
[![devdependencies][d3-helpers-devdependencies-image] ][d3-helpers-devdependencies-url]

Install and use under Node:

```
npm install d3-helpers --save
var helpers = require('d3-helpers');
```

Install and use in browser using bower:

```
bower install d3-helpers
<script src="bower_components/d3-helpers/index.js"></script>
// attaches as window.d3h object
```

## Api

Helpers object is a colleciton of tiny functions:

```js
noop does nothing
pass returns first argument
property(name) returns function returning d[name]
property(name, fn) wraps returned value in fn(), for example to convert
  helpers.property('age', Number)

yes always returns true
no always returns false
datum returns first arg, usually d in (d, i)
index returns second arg, usually i in (d, i)
value(val) returns a function that always returns val
  helpers.value('')() returns ''
```

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/d3-helpers/issues) on Github

## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[d3-helpers-icon]: https://nodei.co/npm/d3-helpers.png?downloads=true
[d3-helpers-url]: https://npmjs.org/package/d3-helpers
[d3-helpers-ci-image]: https://travis-ci.org/bahmutov/d3-helpers.png?branch=master
[d3-helpers-ci-url]: https://travis-ci.org/bahmutov/d3-helpers
[d3-helpers-dependencies-image]: https://david-dm.org/bahmutov/d3-helpers.png
[d3-helpers-dependencies-url]: https://david-dm.org/bahmutov/d3-helpers
[d3-helpers-devdependencies-image]: https://david-dm.org/bahmutov/d3-helpers/dev-status.png
[d3-helpers-devdependencies-url]: https://david-dm.org/bahmutov/d3-helpers#info=devDependencies
