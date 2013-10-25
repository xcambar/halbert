/*global it:true, describe:true */
var Link = require('../../src/link');
var expect = require('chai').expect;

function builder(arg, validation) {
  return function () {
    return new Link(arg, validation);
  };
}

describe("Link", function () {
  "use strict";
  it("should be a function", function () {
    Link.should.be.a('function');
  });

  it("MUST be described by an object literal", function () {
    builder('str').should.throw(TypeError);
  });

  describe("HREF property", function () {
    it("MUST be present", function () {
      builder({}).should.throw(ReferenceError);
      builder({}).should.throw(/Missing "href"/);

      builder({href: '...'}).should.not.throw(Error);
    });
    it("may be missing if validation is turned off", function () {
      builder({}, false).should.not.throw(ReferenceError);
    });
  });

  describe("TEMPLATED property", function () {
    it("can be true", function () {
      var withTemplated = new Link({href: '...', templated: true});
      withTemplated.templated.should.be.true;
    });
    it("defaults to false", function () {
      var withoutTemplated = new Link({href: '...', templated: 'NAY'});
      withoutTemplated.templated.should.be.false;
      var undefinedTemplated = new Link({href: '...'});
      undefinedTemplated.templated.should.be.false;
    });
  });

  describe("DEPRECATION property", function () {
    it("is optional", function () {
      var withoutDeprecation = new Link({href: '...'});
      withoutDeprecation.should.contain.key('deprecated');
      expect(withoutDeprecation.deprecated).to.be.false;
      expect(withoutDeprecation.deprecationInfo).to.be.null;
    });

    it("contains info about deprecation", function () {
      var withDeprecation = new Link({href: '...', deprecation: 'NAY'});
      withDeprecation.deprecated.should.be.true;
      withDeprecation.deprecationInfo.should.eql('NAY');

      var withBoolDeprecation = new Link({href: '...', deprecation: true});
      withBoolDeprecation.deprecated.should.be.true;
      expect(withBoolDeprecation.deprecationInfo).to.be.null;

      var withBoolDeprecation = new Link({href: '...', deprecation: false});
      withBoolDeprecation.deprecated.should.be.false;
      expect(withBoolDeprecation.deprecationInfo).to.be.null;
    });
  });

  describe("other properties", function () {
    it("must be optional", function () {
      builder({href: '...'}).should.not.throw(Error);
    });
    it("must have strings as values", function () {
      builder({href: '...', type: []}).should.throw(Error);
      builder({href: '...', type: ''}).should.not.throw(Error);
    });
    it("can be anything if validation is turned off", function () {
      builder({href: '...', type: ''}, false).should.not.throw(Error);
      builder({href: '...', type: []}, false).should.not.throw(Error);
      builder({href: '...', type: null}, false).should.not.throw(Error);
      builder({href: '...', type: {}}, false).should.not.throw(Error);
    });
   });
});

