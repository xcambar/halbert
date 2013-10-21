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

function Resource(unparsedResource, links, embedded, parser) {
  "use strict";
  var self = this

  if (!utils.isObjectLiteral(unparsedResource)) {
    throw new Error('No object provided');
  }

  var embeddedResources = parseEmbedded(embedded || {}, parser);
  var resourceLinks = new ResourceLinks(links);

  this.toJSON = function () {
    return unparsedResource;
  };

  this.embedded = function (key) {
    return key ? embeddedResources[key] : embeddedResources;
  };

  this.links = function (key) {
    return key ? resourceLinks.get(key) : resourceLinks;
  };

  // copy non-hal properties (everything that is not _links or _embedded) to
  // new resource
  Object.keys(unparsedResource).forEach(function(key) {
    self[key] = unparsedResource[key];
  });
}

module.exports = Resource;

