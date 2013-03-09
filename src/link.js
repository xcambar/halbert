var utils = require('./utils');
function Link(desc) {
  if (!utils.isObjectLiteral(desc)) {
    throw new TypeError('Invalid parameter passed to Link constructor');
  }
}

module.exports = Link;
