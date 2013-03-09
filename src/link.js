var utils = require('./utils');
function Link(desc) {
  "use strict";
  if (!utils.isObjectLiteral(desc)) {
    throw new TypeError('Invalid parameter passed to Link constructor');
  }
  if (!desc.hasOwnProperty('href')) {
    throw new ReferenceError('Missing "href" property to link description');
  }
}

module.exports = Link;

