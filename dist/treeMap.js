"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = treeMap;

/**
 * Works like Array.map, expect for objects.
 */
function treeMap(obj, callback, path = '') {
  if (Array.isArray(obj)) return obj.map((el, i) => {
    return treeMap(el, callback, `${path}/${i}`);
  }); // We only want to map leaf properties of data objects

  if (obj.toString() === '[object Object]') {
    obj = Object.assign({}, obj);
    Object.keys(obj).forEach(key => {
      obj[key] = treeMap(obj[key], callback, `${path}/${key}`);
    });
    return obj;
  }

  return callback(obj, path);
}