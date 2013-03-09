/*global it:true, describe:true*/
var links = require('src/links');

describe("Links parser", function () {
  "use strict";
  it("should be a function", function () {
    links.should.be.a('function');
  });

  xit("should throw an exception if no object literal is given", function () {
    links.bind(undefined, Date.now()).should.throw(TypeError);
    links.bind(undefined, Date.now()).should.throw(/not an object literal/i);
    links.bind(undefined, null).should.throw(TypeError);
    links.bind(undefined, null).should.throw(/not an object literal/i);
    links.bind(undefined, undefined).should.throw(TypeError);
    links.bind(undefined, undefined).should.throw(/not an object literal/i);
    links.bind(undefined, "a string").should.throw(TypeError);
    links.bind(undefined, "a string").should.throw(/not an object literal/i);
    links.bind(undefined, []).should.throw(TypeError);
    links.bind(undefined, []).should.throw(/not an object literal/i);
  });
});

