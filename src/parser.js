var Resource = require('./resource');
var _ = require('lodash');

function parser(halObject, validation) {
  "use strict";

  // if called with one argument, parse will validate. The caller must use
  // false as explicit second argument to disable validation.
  validation = validation == null ? true : validation;

  var unparsedResource = _.cloneDeep(halObject);

  var links = unparsedResource._links;
  delete unparsedResource._links;

  var embedded = unparsedResource._embedded;
  delete unparsedResource._embedded;

  return new Resource(unparsedResource, links, embedded, parser, validation);
}
module.exports = parser;

