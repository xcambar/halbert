function isObjectLiteral(testable) {
  "use strict";
  return Object.prototype.toString.call(testable) === '[object Object]' && JSON.stringify(testable)[0] === '{';
}

module.exports = {
  isObjectLiteral: isObjectLiteral
};

