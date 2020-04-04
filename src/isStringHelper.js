const getTypeHelper = require('./getTypeHelper.js');

/**
 * Checks if an object is a string.
 *
 * @method isString
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true if the object is a string and false otherwise.
 */
module.exports = (object) => 'string' === getTypeHelper(object);
