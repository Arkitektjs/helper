const getTypeHelper = require('./getTypeHelper.js');

/**
 * Checks if an object is a function.
 *
 * @method isFunction
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true if the object is a function and false otherwise.
 */
module.exports = (object) => 'function' === getTypeHelper(object);
