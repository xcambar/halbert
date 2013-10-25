/*global it:true, describe:true*/
var Links = require('../../src/links');
var Link = require('../../src/link');
var expect = require('chai').expect;

describe("Links parser", function () {
  "use strict";
  it("should be a function", function () {
    Links.should.be.a('function');
  });


 it("should return empty link collection if the parameter is falsy", function () {
    checkEmptyLinksCollection(new Links(null));
    checkEmptyLinksCollection(new Links(undefined));
    checkEmptyLinksCollection(new Links(0));
    checkEmptyLinksCollection(new Links(false));
  });

  function checkEmptyLinksCollection(links) {
    // check that links is an empty object except for the method 'get'
    links.get.should.be.a('function');
    Object.keys(links).forEach(function(key) {
      if (key !== 'get') {
        assert.fail();
      }
    });
    links.should.exist;
    links.get.should.be.a('function');
    links.get().should.be.empty;
  }

  it("should throw an exception if no object literal is given", function () {
    Links.bind({}, Date.now()).should.throw(TypeError);
    Links.bind({}, Date.now()).should.throw(/not an object literal/i);
    Links.bind({}, "a string").should.throw(TypeError);
    Links.bind({}, "a string").should.throw(/not an object literal/i);
    Links.bind({}, []).should.throw(TypeError);
    Links.bind({}, []).should.throw(/not an object literal/i);
  });

  // Spec says: "Each Resource Object SHOULD contain a 'self' link"
  // Thus, it is still valid HAL if the self link is missing.
  it("should not throw if no links to self are provided", function () {
    var instance = new Links({});
    instance.should.be.instanceOf(Links);
  });

  describe("Describe with a link to self", function () {
    beforeEach(function () {
      this.fakeLinks = {
        self: { href: "" }
      };
    });
    it("should return an instance of LinkCollection", function () {
      var instance = new Links(this.fakeLinks);
      instance.should.be.instanceOf(Links);
    });

    it("should have a 'get' method to retrieve all the links", function () {
      var instance = new Links(this.fakeLinks);
      instance.get().should.have.keys('self');
    });

    describe("Retrieving the links of a specific type", function () {
      it("should have a 'get' with a parameter to retrieve the links of a specific type as an array", function () {
        var instance = new Links(this.fakeLinks);
        instance.get('self').should.be.an('array');
      });

      it("should have a 'get' with a parameter to retrieve the links of a specific type as an array", function () {
        var instance = new Links(this.fakeLinks);
        instance.get('self').should.be.an('array');
      });

      it("should only contain instance of Links", function () {
        var instance = new Links(this.fakeLinks);
        instance.get('self')[0].should.be.instanceOf(Link);
      });
    });
  });
});

