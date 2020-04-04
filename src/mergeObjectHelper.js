const isObject = require('./isObjectHelper');

/**
 * Merge two object
 *
 * @method mergeObject
 * @param {Object} first First object to merge
 * @param {Object} second Second object to merge
 * @return {Object} Returns merged object
 */
const mergeObjectHelper = (first, second) => {
  Object.keys(second).map((key) => {
    if (isObject(first[key]) && isObject(second[key])) {
      first[key] = mergeObjectHelper(first[key], second[key]);

      return key;
    }

    if (isObject(first[key])) {
      return key;
    }

    first[key] = second[key];

    return key;
  });

  return first;
};

module.exports = mergeObjectHelper;
