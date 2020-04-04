const getTypeHelper = require('./getTypeHelper.js');

/**
 * Checks if an object is a boolean.
 *
 * @method isBoolean
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true if the object is a boolean and false otherwise.
 */
module.exports = (object) => 'boolean' === getTypeHelper(object);
