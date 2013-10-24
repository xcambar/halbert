var utils = require('./utils');
var Link = require('./link');
function Links(json) {
  "use strict";

  var links = {};

  this.get = function (k) {
    return links[k];
  };

  if (!json) {
    return;
  }

  if (!utils.isObjectLiteral(json)) {
    throw new TypeError('The provided object is not an object literal.');
  }

  if (!json.hasOwnProperty('self')) {
    throw new TypeError('No link to self.');
  }

  Object.keys(json).forEach(function (k) {
    links[k] = new Link(json[k]);
  });
}

module.exports = Links;

