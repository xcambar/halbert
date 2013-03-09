/*global it:true, describe:true*/
var parser = require('src/parser'),
    Resource = require('src/resource');

describe("HAL-Parser", function () {
  "use strict";
  it("should be a function", function () {
    parser.should.be.a('function');
  });

  it("should be non-destructive to original json", function () {
    var json = {
      _links: {
        "self": {href: '...'}
      },
      embedded: {
        stuff: []
      },
      prop: "TRUE"
    };

    parser(json);
    json.should.contain.keys(['_links', 'embedded', 'prop']);
  });
});

