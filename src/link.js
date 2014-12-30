var _ = require('lodash');

function Link(desc, validation) {
  "use strict";
  validation = validation == null ? true : validation;

  function has(key) {
    return key in desc;
  }

  function validate(key, type) {
    if (!validation) { return true; }
    return _['is' + type].call(undefined, desc[key]);
  }

  if (!_.isPlainObject(desc)) {
    throw new TypeError('Invalid parameter passed to Link constructor');
  }

  if (!has('href')) {
    if (!validation) { return; }
    throw new ReferenceError('Missing "href" property to link description');
  }

  this.templated = desc.templated === true;


  if (has('deprecation') && !validate('deprecation', 'Boolean') && !validate('deprecation', 'String')) {
    throw new TypeError('Invalid Link deprecation provided');
  }
  this.deprecated = !!desc.deprecation;
  this.deprecationInfo = !desc.deprecation || _.isBoolean(desc.deprecation) ? null : desc.deprecation;


  ['type', 'name', 'profile', 'title', 'href', 'hreflang'].forEach(function (prop) {
    if (has(prop) && desc[prop] != null && !validate(prop, 'String')) {
      throw new Error('Invalid link property "' + prop + '" provided.');
    }
    this[prop] = desc[prop];
  }.bind(this));
}

module.exports = Link;

