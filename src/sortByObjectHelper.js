/**
 * Sort array object value by key.
 *
 * @method sortByObject
 * @param {Object} object Array object.
 * @param {String} key Key.
 */
module.exports = (object, key) => object.sort((a, b) => {
  if (a[key] > b[key]) {
    return 1;
  }
  if (a[key] < b[key]) {
    return -1;
  }

  return 0;
});
