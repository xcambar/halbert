/*global it:true, describe:true*/
var parser = require('../../src/parser'),
    Resource = require('../../src/resource'),
    fixtures = require('./fixture_util'),
    should = require('chai').should();

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

  it("should parse the minimal example fixture", function () {
    var json = fixtures.read('minimal')
    var resource = parser(json);
    resource.links().should.exist;
    resource.links('self').should.be.an('array');
    resource.links('self')[0].should.exist;
    resource.links('self')[0].href.should.equal('dummy');
  });

  it("should parse the fixture example 1", function () {
    var json = fixtures.read('ex1');
    var resource = parser(json);

    resource.links().should.exist;
    resource.links('self')[0].href.should.equal('/orders');
    resource.links('self')[0].templated.should.be.false;
    resource.links('next')[0].href.should.equal('/orders?page=2');
    resource.links('find')[0].href.should.equal('/orders{?id}');
    resource.links('find')[0].templated.should.be.true;
    // TODO add assertions for admin link object array here once that works

    resource.currentlyProcessing.should.equal(14);
    resource.shippedToday.should.equal(20);

    resource.embedded().should.exist;
    var orders = resource.embedded('orders');
    var order1 = orders[0];
    var order2 = orders[1];

    order1.links('self')[0].href.should.equal('/orders/123')
    order1.links('basket')[0].href.should.equal('/baskets/98712')
    order1.links('customer')[0].href.should.equal('/customers/7809')
    order1.total.should.equal(30)
    order1.currency.should.equal('USD')
    order1.status.should.equal('shipped')

    order2.links('self')[0].href.should.equal('/orders/124')
    order2.links('basket')[0].href.should.equal('/baskets/97213')
    order2.links('customer')[0].href.should.equal('/customers/12369')
    order2.total.should.equal(20)
    order2.currency.should.equal('USD')
    order2.status.should.equal('processing')
  });

  it("should parse a resource without links", function () {
    var json = fixtures.read('no_links');
    var resource = parser(json);

    // check that resource.links('something') returns null/undefined instead
    // of throwing an exception
    var nonExistingLink = resource.links('whatever');
    should.not.exist(nonExistingLink);

    // check that links is an empty object except for the method 'get'
    var links = resource.links();
    links.should.exist;
    links.get.should.be.a('function');
    Object.keys(links).forEach(function(key) {
      if (key !== 'get') {
        assert.fail();
      }
    });

    resource.embedded().should.exist;
    resource.property.should.equal('value');
  });
});

