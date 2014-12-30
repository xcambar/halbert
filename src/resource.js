var ResourceLinks = require('./links'),
    _ = require('lodash');

function parseEmbedded(embedded, parser, validation) {
  "use strict";
  var parsed = {};
  var parseSingleEmbedded = _.partialRight(parser, validation);
  Object.keys(embedded).forEach(function (key) {
    var typedResources = embedded[key];
    parsed[key] = typedResources.map ?
        typedResources.map(parseSingleEmbedded) : typedResources;
  });
  return parsed;
}

function Resource(unparsedResource, links, embedded, parser, validation) {
  "use strict";
  var self = this

  if (!_.isPlainObject(unparsedResource)) {
    throw new Error('No object provided');
  }

  var embeddedResources = parseEmbedded(embedded || {}, parser, validation);
  var resourceLinks = new ResourceLinks(links, validation);

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

