const getTypeHelper = require('./getTypeHelper.js');

/**
 * Checks if an object is a number.
 *
 * @method isNumber
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true if the object is a number and false otherwise.
 */
module.exports = (object) => 'number' === getTypeHelper(object);
