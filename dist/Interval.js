"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Basic interval class; adapted from:
 * http://docs.sympy.org/latest/modules/sets.html
 */
var Interval = function () {
  _createClass(Interval, null, [{
    key: "empty",
    value: function empty() {
      return new Interval(0, 0, true, true);
    }
  }]);

  function Interval(start, end) {
    var leftOpen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var rightOpen = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Interval);

    var _ref = [start, end, leftOpen, rightOpen];
    this.start = _ref[0];
    this.end = _ref[1];
    this.leftOpen = _ref[2];
    this.rightOpen = _ref[3];
  }

  _createClass(Interval, [{
    key: "intersect",
    value: function intersect(other) {
      if (!(other instanceof Interval)) return;
      if (this.start > other.end || this.end < other.start) return Interval.empty();

      var start = void 0,
          end = void 0,
          leftOpen = void 0,
          rightOpen = void 0;

      if (this.start < other.start) {
        start = other.start;
        leftOpen = other.leftOpen;
      } else if (this.start > other.start) {
        start = this.start;
        leftOpen = this.leftOpen;
      } else {
        start = this.start;
        leftOpen = this.leftOpen || other.leftOpen;
      }

      if (this.end < other.end) {
        end = this.end;
        rightOpen = this.rightOpen;
      } else if (this.end > other.end) {
        end = other.end;
        rightOpen = other.rightOpen;
      } else {
        end = this.end;
        rightOpen = this.rightOpen || other.rightOpen;
      }

      return new Interval(start, end, leftOpen, rightOpen);
    }
  }, {
    key: "empty",
    get: function get() {
      return this.end < this.start || this.end - this.start === 0 && (this.leftOpen || this.rightOpen);
    }
  }]);

  return Interval;
}();

exports.default = Interval;
module.exports = exports["default"];