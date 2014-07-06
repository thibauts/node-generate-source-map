generate-source-map
===================
### Generates an identity source-map from a javascript file

Can be used with `combine-source-map` to generate source-maps with correct line and column information before bundling.

Installation
------------

``` bash
$ npm install generate-source-map
```

Usage
-----

``` javascript
var generate = require('generate-source-map');
var fs = require('fs');

var file = {
  source: fs.readFileSync('test.js'),
  sourceFile: 'test.js'
};

var map = generate(file);

console.log(map.toString());
```