var helpers = {
  noop: function () {},
  no: function () { return false; },
  yes: function () { return true; },
  pass: function (d) { return d; },
  datum: function (d) { return d; },
  index: function (d, i) { return i; },
  empty: function () { return ''; },
  property: function (name) {
    return function (d) {
      return d[name];
    };
  }
};

module.exports = helpers;
