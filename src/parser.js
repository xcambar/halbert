var Resource = require('./resource');
var _ = require('lodash');

function parser(json) {
  "use strict";
 
  json = _.cloneDeep(json);

  var links = json._links;
  delete json._links;

  var embedded = json._embedded;
  delete json._embedded;

  return new Resource(json, links, embedded);
}
module.exports = parser;

