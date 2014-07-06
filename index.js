var esprima            = require('esprima');
var SourceMapGenerator = require('source-map').SourceMapGenerator;

function generate(file) {
  var map = new SourceMapGenerator({ file: file.sourceFile });
  var tokens = esprima.tokenize(file.source, { loc: true });

  tokens.forEach(function(token) {
    var loc = token.loc.start;
    map.addMapping({
      source: file.sourceFile,
      original: loc,
      generated: loc
    });
  });

  return map.toJSON();
}

module.exports = generate;