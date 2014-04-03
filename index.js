(function () {

  var helpers = (function () {
    var helpers = {
      noop: function () {},
      no: function () { return false; },
      yes: function () { return true; },
      pass: function (d) { return d; },
      datum: function (d) { return d; },
      index: function (d, i) { return i; },
      value: function (val) {
        return function () {
          return val;
        };
      },
      property: function (name, fn) {
        return function (d) {
          return (typeof fn === 'function' ? fn(d[name]) : d[name]);
        };
      }
    };

    return helpers;
  }());

  if (typeof window === 'object') {
    /* global window */
    window.d3h = helpers;
  } else if (typeof module === 'object') {
    module.exports = helpers;
  } else {
    throw new Error('Do not know how to exports D3 helpers');
  }

}());
