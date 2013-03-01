/*global it:true, describe:true*/
var parser = require('../../src/parser'),
    Resource = require('../../src/resource');

describe("HAL-Parser", function () {
  "use strict";
  it("should be a function", function () {
    parser.should.be.a('function');
  });

  it("should throw an exception if no `_links` attribute is available", function () {
    parser.bind(undefined, {}).should.throw(TypeError);
    parser.bind(undefined, {}).should.throw(/no _links/i);
  });

  it("should return an instance of Resource", function () {
    parser({_links: { self: "..." }}).should.be.instanceOf(Resource);
  });
});

