(function () {

  function assemble() {
    var helpers = {
      noop: function () {},
      no: function () { return false; },
      yes: function () { return true; },
      undef: function () { return; },
      pass: function (d) { return d; },
      datum: function () {
        var args = Array.prototype.slice.call(arguments, 0);
        return this.pass.apply(this, args);
      },
      d: function () {
        var args = Array.prototype.slice.call(arguments, 0);
        return this.pass.apply(this, args);
      },
      index: function (d, i) { return i; },
      value: function (val) {
        return function () {
          return val;
        };
      },
      property: function (name) {
        var fns = Array.prototype.slice.call(arguments, 1);
        return function (d) {
          var value = d[name];
          fns.forEach(function (fn) {
            value = fn(value);
          });
          return value;
        };
      },
      newDate: function (d) {
        return new Date(d);
      }
    };

    function d3h() {
      var args = Array.prototype.slice.call(arguments, 0);
      if (args.length) {
        var fns = args;
        return function (d) {
          fns.forEach(function (fn) {
            if (typeof fn === 'string') {
              d = d[fn];
            } else if (typeof fn === 'function') {
              d = fn(d);
            } else {
              throw new Error('Cannot apply ' + JSON.stringify(fn, null, 2) +
                ' to value ' + d + ' not a property name or function');
            }
          });
          return d;
        };
      }
    }

    for (var prop in helpers) {
      if (helpers.hasOwnProperty(prop)) {
        d3h[prop] = helpers[prop];
      }
    }
    return d3h;
  }

  function register(value, name) {
    if (typeof window === 'object') {
      /* global window */
      window[name] = value;
    } else if (typeof module === 'object') {
      module.exports = value;
    } else {
      throw new Error('Do not know how to register ' + name);
    }
  }

  var d3h = assemble();
  register(d3h, 'd3h');

}());
