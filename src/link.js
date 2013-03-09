var utils = require('./utils');
var _ = require('lodash');

function Link(desc) {
  "use strict";
  if (!utils.isObjectLiteral(desc)) {
    throw new TypeError('Invalid parameter passed to Link constructor');
  }
  if (!('href' in desc)) {
    throw new ReferenceError('Missing "href" property to link description');
  }

  this.templated = desc.templated === true;
  
  
  if ('type' in desc && !_.isString(desc.type)) {
    throw new TypeError('Invalid Link type provided');
  }
  this.type = desc.type;


  if ('deprecation' in desc && !_.isBoolean(desc.deprecation) && !_.isString(desc.deprecation)) {
    throw new TypeError('Invalid Link deprecation provided');
  }
  this.deprecated = !!desc.deprecation;
  this.deprecationInfo = !desc.deprecation || _.isBoolean(desc.deprecation) ? null : desc.deprecation;


  if ('name' in desc && !_.isString(desc.name)) {
    throw new TypeError('Invalid Link name provided');
  }
  this.name = desc.name;


  if ('profile' in desc && !_.isString(desc.profile)) {
    throw new TypeError('Invalid Link profile provided');
  }
  this.profile = desc.profile;


  if ('title' in desc && !_.isString(desc.title)) {
    throw new TypeError('Invalid Link title provided');
  }
  this.title = desc.title;


  if ('hreflang' in desc && !_.isString(desc.hreflang)) {
    throw new TypeError('Invalid Link hreflang provided');
  }
  this.hreflang = desc.hreflang;

}

module.exports = Link;

