/*global it:true, describe:true*/
var links = require('../../src/links');
var expect = require('chai').expect;

describe("Links parser", function () {
  "use strict";
  it("should be a function", function () {
    links.should.be.a('function');
  });

  it("should return undefined if the parameter is falsy", function () {
    expect(links(null)).to.be.equal(undefined);
    expect(links(undefined)).to.be.equal(undefined);
    expect(links(0)).to.be.equal(undefined);
    expect(links(false)).to.be.equal(undefined);
  });

  it("should throw an exception if no object literal is given", function () {
    links.bind(undefined, Date.now()).should.throw(TypeError);
    links.bind(undefined, Date.now()).should.throw(/not an object literal/i);
    links.bind(undefined, "a string").should.throw(TypeError);
    links.bind(undefined, "a string").should.throw(/not an object literal/i);
    links.bind(undefined, []).should.throw(TypeError);
    links.bind(undefined, []).should.throw(/not an object literal/i);
  });
});

