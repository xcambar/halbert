/*global it:true, describe:true*/
var Links = require('../../src/links');

describe("Links parser", function () {
  "use strict";
  it("should be a function", function () {
    Links.should.be.a('function');
  });

  it("should cope with _links not being present", function () {
    var emptyLinks = new Links(undefined);
    emptyLinks.should.exist;
    emptyLinks.get.should.be.a('function');
  });

  xit("should throw an exception if no object literal is given", function () {
    Links.bind(undefined, Date.now()).should.throw(TypeError);
    Links.bind(undefined, Date.now()).should.throw(/not an object literal/i);
    Links.bind(undefined, null).should.throw(TypeError);
    Links.bind(undefined, null).should.throw(/not an object literal/i);
    Links.bind(undefined, undefined).should.throw(TypeError);
    Links.bind(undefined, undefined).should.throw(/not an object literal/i);
    Links.bind(undefined, "a string").should.throw(TypeError);
    Links.bind(undefined, "a string").should.throw(/not an object literal/i);
    Links.bind(undefined, []).should.throw(TypeError);
    Links.bind(undefined, []).should.throw(/not an object literal/i);
  });
});

