var Link = require('./link'),
    _ = require('lodash');
function Links(json, validation) {
  "use strict";
  validation = validation == null ? true : validation;

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

  Object.keys(json).forEach(function (k) {
    var link = json[k];
    if (!_.isArray(link)) {
      link = [link];
    }
    var parsedLinks = link.map(function (description) {
      return new Link(description, validation);
    });
    links[k] = parsedLinks;
  });

}

module.exports = Links;

