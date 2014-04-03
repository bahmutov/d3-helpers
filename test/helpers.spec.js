var d3h = require('..');
var expect = require('expect.js');
var assert = require('better-assert');
// var sinon = require('sinon');

describe('d3h d3-helpers', function () {
  it('is a collection of functions', function () {
    assert(d3h);
    expect(d3h).to.be.an('object');
  });

  describe('noop', function () {
    it('is a function', function () {
      expect(d3h.noop).to.be.a('function');
    });

    it('expect nothing, returns nothing', function () {
      expect(d3h.noop.length).to.equal(0);
      expect(d3h.noop()).to.be(undefined);
    });
  });

  describe('undef', function () {
    it('always returns undefined', function () {
      expect(d3h.undef()).to.be(undefined);
      expect(d3h.undef(true)).to.be(undefined);
    });
  });

  describe('yes and no', function () {
    it('yes always returns true', function () {
      expect(d3h.yes()).to.be(true);
      expect(d3h.yes(false)).to.be(true);
    });

    it('no always returns true', function () {
      expect(d3h.no()).to.be(false);
      expect(d3h.no(true)).to.be(false);
    });
  });

  describe('pass', function () {
    it('returns whatever passed', function () {
      expect(d3h.pass(101)).to.be(101);
      var foo = {};
      expect(d3h.pass(foo)).to.be(foo);
    });

    it('works as this logic', function () {
      function triple(x) { return 3 * x; }
      var fn = function (x) {
        return triple(x);
      };
      expect(fn(2)).to.equal(6);
    });

    it('can wrap returned value in given function', function () {
      function triple(x) { return 3 * x; }
      var fn = d3h.pass(triple);
      expect(fn).to.be.a('function');
      expect(fn(2)).to.equal(6);
    });
  });

  describe('datum and index', function () {
    it('datum returns first arg, usually d', function () {
      expect(d3h.datum(101, 3)).to.be(101);
    });

    it('index returns second arg, usually i', function () {
      expect(d3h.index(101, 3)).to.be(3);
    });
  });

  describe('d = datum = pass', function () {
    expect(d3h.d('foo')).to.equal('foo');
  });

  describe('value', function () {
    it('can return empty string', function () {
      var fn = d3h.value('');
      expect(fn).to.be.a('function');

      expect(fn()).to.be.a('string');
      expect(fn()).to.equal('');
    });
  });

  describe('property', function () {
    it('grabs given property', function () {
      var point = {
        x: 10,
        y: 20
      };
      var getX = d3h.property('x');
      expect(getX).to.be.a('function');
      expect(getX.length).to.equal(1);
      expect(getX(point)).to.equal(10);

      var getY = d3h.property('y');
      expect(getY(point)).to.equal(20);
    });

    it('returns undefined for non existing property', function () {
      var point = {
        x: 10,
        y: 20
      };
      var getZ = d3h.property('z');
      expect(getZ(point)).to.be(undefined);
    });

    it('runs optional function after access', function () {
      var person = { age: '10' };
      expect(d3h.property('age')(person)).to.be.a('string');
      expect(d3h.property('age', Number)(person)).to.be.a('number');
    });
  });

  describe('example with combined functions', function () {
    var d3 = require('d3');

    // notice age property is string,
    // so we need to convert to number first
    var people = [{
      age: '10'
    }, {
      age: '20'
    }, {
      age: '5'
    }];

    it('can be done in complex way', function () {
      var youngest = d3.min(people, function (d) { return +d.age; });
      expect(youngest).to.be.a('number');
      expect(youngest).to.equal(5);
    });

    it('can be done using d3h', function () {
      var youngest = d3.min(people, d3h.property('age', Number));
      expect(youngest).to.be.a('number');
      expect(youngest).to.equal(5);
    });
  });

  describe('property with function composition', function () {
    var d3 = require('d3');
    var people = [{
      age: '10'
    }, {
      age: '20'
    }, {
      age: '5'
    }];
    function triple(x) { return 3 * x; }
    function add2(x) { return x + 2; }
    var youngest = d3.min(people,
      d3h.property('age', Number, triple, add2));
    expect(youngest).to.equal(17);
  });

  describe('parse date', function () {
    var d3 = require('d3');
    var d = {
      date: new Date('2014/03/02')
    };
    expect(d.date).to.be.a(Date);
    expect(d3h.property('date')(d)).to.equal(d.date);
    var x = d3.time.scale()
      .domain([new Date('2012/10/10'), new Date('2018/10/10')])
      .range([0, 100]);
    var t0 = d3h.property('date', x)(d);
    expect(t0).to.be.a('number');
    expect(t0).to.be.above(0);
    expect(t0).to.be.below(1000);
  });

  describe('newDate', function () {
    var d = {
      date: '2014/03/02'
    };
    expect(d.date).to.be.a('string');
    expect(d3h.newDate(d.date)).to.be.a(Date);
    var value = d3h.property('date', d3h.newDate)(d);
    expect(value).to.be.a(Date);
  });
});
