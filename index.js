var esprima            = require('esprima');
var SourceMapGenerator = require('source-map').SourceMapGenerator;

function generate(file) {
  var options = { 
    file: file.sourceFile,
    sourceRoot: file.sourceRoot || ''
  };

  var map = new SourceMapGenerator(options);
  var tokens = esprima.tokenize(file.source, { loc: true });

  tokens.forEach(function(token) {
    var loc = token.loc.start;
    map.addMapping({
      source: file.sourceFile,
      original: loc,
      generated: loc
    });
  });

  return map;
}

module.exports = generate;