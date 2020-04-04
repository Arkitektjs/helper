const isObjectHelper = require('./isObjectHelper');

/**
 * Get value from array object using string key.
 *
 * @method setByKey
 * @param {Object} object Array object.
 * @param {String} key Key of value.
 * @param {*} value Value to set.
 * @return {Object} Returns initial value with added value.
 */
const setByKeyHelper = (object, key, value) => {
  key = key.replace(/^ *| *$/, '');
  if ('' === key) {
    return object;
  }

  const keys = key.split('.');
  if (0 === keys.length) {
    return object;
  }

  if (1 === keys.length) {
    object[keys[0]] = value;

    return object;
  }

  if (!isObjectHelper(object[keys[0]])) {
    object[keys[0]] = {};
  }

  object[keys[0]] = setByKeyHelper(object[keys[0]], keys.slice(1).join('.'), value);

  return object;
};
module.exports = setByKeyHelper;
