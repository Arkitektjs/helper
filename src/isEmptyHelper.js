const isNumberHelper = require('./isNumberHelper.js');

/**
 * Checks if an object is empty.
 *
 * @method isEmpty
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true for
 *    empty array, string, object, false, undefined, 0, null, NaN
 *    and false otherwise.
 */
module.exports = (object) => {
  if (!object) {
    return true;
  }
  const objectKeys = Object.keys(object);
  for (let k = 0; k < objectKeys.length; k += 1) {
    if (Object.prototype.hasOwnProperty.call(object, objectKeys[k])) {
      return false;
    }
  }

  return !(true === object || isNumberHelper(object));
};
