var chai = require('chai'),
    sinon_chai = require('sinon-chai');

chai.use(sinon_chai);
chai.should();

require('./suites/specs');
