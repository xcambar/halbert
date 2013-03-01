var parser = require('./parser'),
    ResourceLinks = require('./links');

function parseEmbedded(embedded) {
  "use strict";
  var parsed = {};
  Object.keys(embedded).forEach(function (key) {
    var typedResources = embedded[key];
    parsed[key] = typedResources.map(parser);
  });
}

function Resource(json, links, embedded) {
  "use strict";
  var embeddedResources = parseEmbedded(embedded || {});
  var resourceLinks = new ResourceLinks(links);

  this.toJSON = function () {
    return json;
  };

  this.embedded = function (key) {
    return key ? embeddedResources[key] : embeddedResources;
  };

  this.link = function (key) {
    return key ? resourceLinks[key] : resourceLinks[key];
  };
}

module.exports = Resource;

