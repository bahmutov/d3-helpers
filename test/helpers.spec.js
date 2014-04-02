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

  describe('yes and no', function () {
    it('yes always returns true', function () {
      expect(helpers.yes()).to.be.true;
      expect(helpers.yes(false)).to.be.true;
    });

    it('no always returns true', function () {
      expect(helpers.no()).to.be.false;
      expect(helpers.no(true)).to.be.false;
    });
  });

  describe('pass', function () {
    it('returns whatever passed', function () {
      expect(helpers.pass(101)).to.be(101);
      var foo = {};
      expect(helpers.pass(foo)).to.be(foo);
    });
  });

  describe('datum and index', function () {
    it('datum returns first arg, usually d', function () {
      expect(helpers.datum(101, 3)).to.be(101);
    });

    it('index returns second arg, usually i', function () {
      expect(helpers.index(101, 3)).to.be(3);
    });
  });

  describe('empty', function () {
    it('returns empty string', function () {
      expect(helpers.empty()).to.be.string;
      expect(helpers.empty()).to.equal('');
    });
  });

  describe('property', function () {
    it('grabs given property', function () {
      var point = {
        x: 10,
        y: 20
      };
      var getX = helpers.property('x');
      expect(getX).to.be.function;
      expect(getX.length).to.equal(1);
      expect(getX(point)).to.equal(10);

      var getY = helpers.property('y');
      expect(getY(point)).to.equal(20);
    });

    it('returns undefined for non existing property', function () {
      var point = {
        x: 10,
        y: 20
      };
      var getZ = helpers.property('z');
      expect(getZ(point)).to.be.undefined;
    });
  });
});
