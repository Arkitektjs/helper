const isObjectHelper = require('./isObjectHelper.js');

/**
 * Converts an object to array.
 *
 * @method convertToArray
 * @param {any} object Object to convert.
 * @return {Array} Returns the resulting array.
 */
module.exports = (object) => {
  if (isObjectHelper(object)) {
    return Object.keys(object);
  }

  return [].slice.call(object);
};
