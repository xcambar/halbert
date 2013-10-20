var ResourceLinks = require('./links'),
    utils = require('./utils');

function parseEmbedded(embedded, parser) {
  "use strict";
  var parsed = {};
  Object.keys(embedded).forEach(function (key) {
    var typedResources = embedded[key];
    parsed[key] = typedResources.map ? typedResources.map(parser) : typedResources;
  });
  return parsed;
}

function Resource(json, links, embedded, parser) {
  "use strict";

  if (!utils.isObjectLiteral(json)) {
    throw new Error('No object provided');
  }

  var embeddedResources = parseEmbedded(embedded || {}, parser);
  var resourceLinks = new ResourceLinks(links);

  this.toJSON = function () {
    return json;
  };

  this.embedded = function (key) {
    return key ? embeddedResources[key] : embeddedResources;
  };

  this.links = function (key) {
    return key ? resourceLinks.get(key) : resourceLinks;
  };
}

module.exports = Resource;

