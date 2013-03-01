/*global it:true, describe:true */
var Resource = require('src/resource');
describe("Resources", function () {
  "use strict";
  it("should be a function", function () {
    Resource.should.be.a('function');
  });

  it("can not be instantiated without links", function () {
    var errorFn = function () {
      new Resource({}, null, {});
    };
    errorFn.should.throw(Error);
  });

  it("can be instantiated only with _self link", function () {
    var errorFn = function () {
      new Resource({}, {}, null);
    };
    errorFn.should.throw(Error);

    var goodFn = function () {
      new Resource({}, {self: 'dummy'});
    };
    goodFn.should.not.throw(Error);
  });
});

