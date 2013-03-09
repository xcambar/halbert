/*global it:true, describe:true */
var Resource = require('src/resource');
var LinkCollection = require('src/links');
var Link = require('src/link');
var parser = require('src/parser');

describe("Resources", function () {
  "use strict";
  it("should be a function", function () {
    Resource.should.be.a('function');
  });

  it("MUST have a Resource as its root object", function () {
    parser({}).should.be.instanceOf(Resource);
    parser.bind(undefined, []).should.throw(Error);
    parser.bind(undefined).should.throw(Error);
    parser.bind(undefined, "invalid").should.throw(Error);
  });

  it("OPTIONALLY has a _embedded property", function () {
    var r1 = parser({});
    r1.embedded().should.be.empty;

    var _withEmbedded = {_embedded: {emb: {}}};
    var r2 = parser(_withEmbedded);
    r2.embedded().should.not.be.empty;
  });

  it("OPTIONALLY has a _links property", function () {
    var r1 = parser({});
    r1.links().should.be.empty;

    var r2 = parser({_links: {
      "self": {href: '...'}
    }});
    r2.links().should.be.instanceOf(LinkCollection);
  });

  it("should have Link instances as link properties", function () {
    var r2 = parser({_links: {
      "self": {href: '...'}
    }});
    r2.links('self').should.be.instanceOf(Link);
  });

});

