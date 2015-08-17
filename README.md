arraysort
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-arraysort
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-arraysort
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-arraysort.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-arraysort/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-arraysort
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-arraysort.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-arraysort.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-arraysort
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-arraysort.svg
[bd_npm_url]: http://www.npmjs.org/package/arraysort
[bd_npm_shield_url]: http://img.shields.io/npm/v/arraysort.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Node.js module for array sorting.

<!-- Description End -->



<!-- Sections Start -->
<a name="sections"></a>

Installation
-----

```bash
npm install arraysort --save
```

Usage
-------


+ [Sort Strings](#sort-strings)

### Sort Strings

`arraysort.stringCompare(options)` create a function which sort entries by string comparing.

```Javascript
var arraysort = require('arraysort');

// Define a sort function.
var stringAsc = arraysort.stringCompare(),
    stringDesc = arraysort.stringCompare({desc: true});

// Execute sorting.
var values = ['foo', 'bar', 'baz'];
values = values.sort(stringAsc); // -> ['foo', 'baz', 'bar']
values = values.sort(stringDesc); // -> ['bar', 'baz', 'foo']

```




<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-arraysort/blob/master/LICENSE).

<!-- LICENSE End -->


