'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = treeMap;
/**
 * Works like Array.map, expect for objects.
 */
function treeMap(obj, callback) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (Array.isArray(obj)) return obj.map(function (el, i) {
    return treeMap(el, callback, path + '/' + i);
  });

  // We only want to map leaf properties of data objects
  if (obj.toString() === '[object Object]') {
    obj = Object.assign({}, obj);
    Object.keys(obj).forEach(function (key) {
      obj[key] = treeMap(obj[key], callback, path + '/' + key);
    });
    return obj;
  }
  return callback(obj, path);
}
module.exports = exports['default'];