var Resource = require('./resource');
var _ = require('lodash');

function parser(halObject) {
  "use strict";

  var unparsedResource = _.cloneDeep(halObject);

  var links = unparsedResource._links;
  delete unparsedResource._links;

  var embedded = unparsedResource._embedded;
  delete unparsedResource._embedded;

  return new Resource(unparsedResource, links, embedded, parser);
}
module.exports = parser;

