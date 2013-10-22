/*global it:true, describe:true*/
var links = require('../../src/links');
var Link = require('../../src/link');
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

  it("should throw if no links to self os provided", function () {
    links.bind(undefined, {}).should.throw(TypeError);
    links.bind(undefined, {}).should.throw(/No link to self/);
  });

  describe("Describe with a link to self", function () {
    beforeEach(function () {
      this.fakeLinks = {
        self: { href: "" }
      };
    });
    it("should return an instance of LinkCollection", function () {
      var instance = new links(this.fakeLinks);
      instance.should.be.instanceOf(links);
      instance.should.be.instanceOf(links);
    });

    it("should have a 'get' method to retrieve all the links", function () {
      var instance = new links(this.fakeLinks);
      instance.get().should.have.keys('self');
    });

    describe("Retrieving the links of a specific type", function () {
      it("should have a 'get' with a parameter to retrieve the links of a specific type as an array", function () {
        var instance = new links(this.fakeLinks);
        instance.get('self').should.be.an('array');
      });

      it("should have a 'get' with a parameter to retrieve the links of a specific type as an array", function () {
        var instance = new links(this.fakeLinks);
        instance.get('self').should.be.an('array');
      });

      it("should only contain instance of Links", function () {
        var instance = new links(this.fakeLinks);
        instance.get('self')[0].should.be.instanceOf(Link);
      });
    });
  });
});

