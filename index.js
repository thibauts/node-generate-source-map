var esprima            = require('esprima');
var SourceMapGenerator = require('source-map').SourceMapGenerator;

function generate(file) {
  var options = { 
    file: file.sourceFile,
    sourceRoot: file.sourceRoot || ''
  };

  var map = new SourceMapGenerator(options);
  var code = file.source;
  if (typeof code !== 'string' && !(code instanceof String)) {
    code = String(code);
  }
  var tokens = esprima.tokenize(code, { loc: true });

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