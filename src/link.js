var utils = require('./utils');
var _ = require('lodash');

function Link(desc) {
  "use strict";

  function has(key) {
    return key in desc;
  }

  function validate(key, type) {
    return _['is' + type].call(undefined, desc[key]);
  }

  if (!utils.isObjectLiteral(desc)) {
    throw new TypeError('Invalid parameter passed to Link constructor');
  }

  if (!has('href')) {
    throw new ReferenceError('Missing "href" property to link description');
  }

  this.templated = desc.templated === true;


  if (has('deprecation') && !validate('deprecation', 'Boolean') && !validate('deprecation', 'String')) {
    throw new TypeError('Invalid Link deprecation provided');
  }
  this.deprecated = !!desc.deprecation;
  this.deprecationInfo = !desc.deprecation || _.isBoolean(desc.deprecation) ? null : desc.deprecation;


  ['type', 'name', 'profile', 'title', 'href', 'hreflang'].forEach(function (prop) {
    if (has(prop) && !validate(prop, 'String')) {
      throw new Error('Invalid link property "' + prop + '" provided.');
    }
    this[prop] = desc[prop];
  }.bind(this));
}

module.exports = Link;

