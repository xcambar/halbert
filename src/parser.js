var Resource = require('./resource');
function parser(json) {
  "use strict";

  if (!json._links) {
    throw new TypeError('No _links provided.');
  }
  var links = json._links;
  delete json._links;

  var embedded = json._embedded;
  delete json._embedded;

  return new Resource(json, links, embedded);
}
module.exports = parser;

