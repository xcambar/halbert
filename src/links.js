var Link = require('./link'),
    _ = require('lodash');
function Links(json) {
  "use strict";

  var links = {};

  this.get = function (k) {
    return k ? links[k] : links;
  };

  if (!json) {
    return;
  }

  if (!_.isPlainObject(json)) {
    throw new TypeError('The provided object is not an object literal.');
  }

  if (!json.hasOwnProperty('self')) {
    throw new TypeError('No link to self.');
  }

  Object.keys(json).forEach(function (k) {
    var link = json[k];
    if (!_.isArray(link)) {
      link = [link];
    }
    var parsedLinks = link.map(function (description) {
      return new Link(description);
    });
    links[k] = parsedLinks;
  });

}

module.exports = Links;

