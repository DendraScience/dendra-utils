'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = airPressure;

var _air2 = require('./_air');

var _air = _interopRequireWildcard(_air2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Get air pressure (pascals) at the given height (h) in meters.
 */
function airPressure(h) {
  return _air.calc(_air.PRESSURE, h);
}
module.exports = exports['default'];