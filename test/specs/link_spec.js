/*global it:true, describe:true */
var Link = require('src/link');

function builder(arg) {
  return function () {
    return new Link(arg);
  };
}

describe("Link", function () {
  "use strict";
  it("should be a function", function () {
    Link.should.be.a('function');
  });

  it("MUST be an object literal", function () {
    builder('str').should.throw(TypeError);
  });

  it("MUST have a HREF property", function () {
    builder({}).should.throw(ReferenceError);
    builder({}).should.throw(/Missing "href"/);

    builder({href: '...'}).should.not.throw(Error);
  });
});

