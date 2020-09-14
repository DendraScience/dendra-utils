/**
 * Works like Array.map, expect for objects.
 */
export default function treeMap(obj, callback) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (Array.isArray(obj)) return obj.map((el, i) => {
    return treeMap(el, callback, "".concat(path, "/").concat(i));
  }); // We only want to map leaf properties of data objects

  if (obj.toString() === '[object Object]') {
    obj = Object.assign({}, obj);
    Object.keys(obj).forEach(key => {
      obj[key] = treeMap(obj[key], callback, "".concat(path, "/").concat(key));
    });
    return obj;
  }

  return callback(obj, path);
}