"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = airDensity;

var _air = _interopRequireWildcard(require("./_air"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Get air density (kg/m^3) at the given height (h) in meters.
 */
function airDensity(h) {
  return _air.calc(_air.DENSITY, h);
}