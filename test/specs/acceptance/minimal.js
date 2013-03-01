var minimal  = require('test/fixtures/minimal');
var parser = require('src/parser');
var Resource = require('src/resource');

describe("Minimal payload", function () {
  it("should load with minimal data", function () {
    parser.bind(undefined, minimal).should. not.throw(Error);
    parser(minimal).should.be.instanceOf(Resource);
  });
  it("should throw an error with less data", function () {
    delete minimal._links.self;
    parser.bind(undefined, minimal).should.throw(TypeError);
  });
});
