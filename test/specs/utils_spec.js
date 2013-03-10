/*global it:true, describe:true */
var utils = require('../../src/utils');

describe("utils", function () {
  "use strict";
  it("should only contain functions", function () {
    Object.keys(utils).forEach(function (k) {
      utils[k].should.be.a('function');
    });
  });

  describe('::isObjectLiteral', function () {
    it("should return false if no object literal is given", function () {
      utils.isObjectLiteral(new Date()).should.be.false;
      utils.isObjectLiteral(null).should.be.false;
      utils.isObjectLiteral(undefined).should.be.false;
      utils.isObjectLiteral("a string").should.be.false;
      utils.isObjectLiteral([]).should.be.false;
    });
  });
});

