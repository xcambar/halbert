/*global it:true, describe:true */
var Link = require('src/link');

describe("Link", function () {
  "use strict";
  it("should be a function", function () {
    Link.should.be.a('function');
  });

  it("MUST be an object literal", function () {
    function builder(arg) {
      return function () {
        new Link(arg);
      };
    }

    builder('str').should.throw(TypeError);
  });
});

