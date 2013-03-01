/*global define:true, require:true, suites:true */

require.config({
  // You wil most likely need to adapt the paths accordingly with your environment
  "baseUrl" : '../',
  "shim"    : {
    "mocha": { "exports": 'mocha' }
  },
  "paths"   : {
    "sinon"       : '../test/node_modules/sinon-chai/node_modules/sinon/lib',
    "chai"        : '../test/node_modules/chai/chai',
    "sinon-chai"  : '../test/node_modules/sinon-chai/lib/sinon-chai',
    "mocha"       : '../test/node_modules/mocha/mocha',
    "init"        : '../test/init'
  }
});
    
define(['mocha'], function (mocha) {
  'use strict';
  mocha.setup('bdd');
  require(suites.map(function (s) { return '../test/suites/' + s; }), function () {
    mocha.run();
  });
});

