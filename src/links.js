var utils = require('./utils');
function links(json) {
  "use strict";
  if (!utils.isObjectLiteral(json)) {
    throw new TypeError('The provided object is not an object literal.');
  }

  if (!json.hasOwnProperty('self')) {
    throw new TypeError('No link to self.');
  }
}

module.exports = links;

