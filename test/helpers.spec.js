var helpers = require('..');
var expect = require('expect.js');
var assert = require('better-assert');
// var sinon = require('sinon');

// jshint -W030
describe('d3 helpers', function () {
  it('is a collection of functions', function () {
    assert(helpers);
    expect(helpers).to.be.object;
  });

  describe('noop', function () {
    it('is a function', function () {
      expect(helpers.noop).to.be.function;
    });

    it('expect nothing, returns nothing', function () {
      expect(helpers.noop.length).to.equal(0);
      expect(helpers.noop()).to.be.undefined;
    });
  });
});
