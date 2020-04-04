const hasPropertyHelper = require('./hasPropertyHelper');

/**
 * Get value from array object using string key.
 *
 * @method getByKey
 * @param {Object} object Array object.
 * @param {String} key String key.
 * @return {*} Returns find value or undefined otherwise
 */
module.exports = (object, key) => {
  const keys = key.split('.');

  for (let i = 0; i < keys.length; i += 1) {
    key = keys[i];
    if (!object || !hasPropertyHelper(object, key)) {
      return undefined;
    }
    object = object[key];
  }

  return object;
};
