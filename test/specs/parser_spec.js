/*global it:true, describe:true*/
var parser = require('../../src/parser'),
    Resource = require('../../src/resource'),
    fixtures = require('./fixture_util');

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
    resource.links('self').should.exist;
    resource.links('self').href.should.equal('dummy');
  });

  it("should parse the fixture example 1", function () {
    var json = fixtures.read('ex1');
    var resource = parser(json);

    resource.links().should.exist;
    resource.links('self').href.should.equal('/orders');
    resource.links('self').templated.should.be.false;
    resource.links('next').href.should.equal('/orders?page=2');
    resource.links('find').href.should.equal('/orders{?id}');
    resource.links('find').templated.should.be.true;
    // TODO add assertions for admin link object array here once that works

    resource.currentlyProcessing.should.equal(14);
    resource.shippedToday.should.equal(20);

    resource.embedded().should.exist;
    var orders = resource.embedded('orders');
    var order1 = orders[0];
    var order2 = orders[1];

    order1.links('self').href.should.equal('/orders/123')
    order1.links('basket').href.should.equal('/baskets/98712')
    order1.links('customer').href.should.equal('/customers/7809')
    order1.total.should.equal(30)
    order1.currency.should.equal('USD')
    order1.status.should.equal('shipped')

    order2.links('self').href.should.equal('/orders/124')
    order2.links('basket').href.should.equal('/baskets/97213')
    order2.links('customer').href.should.equal('/customers/12369')
    order2.total.should.equal(20)
    order2.currency.should.equal('USD')
    order2.status.should.equal('processing')
  });
});

