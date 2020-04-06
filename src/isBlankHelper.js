const isStringHelper = require('./isStringHelper.js');

/**
 * Checks if a string is blank.
 *
 * @method isBlank
 * @param {String} object Object we want to know the type.
 * @return {Boolean} Returns true if the string is blank and false otherwise.
 */
module.exports = (object) => isStringHelper(object) && '' === object.trim();
