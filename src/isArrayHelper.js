const getTypeHelper = require('./getTypeHelper.js');

/**
 * Checks if an object is a array.
 *
 * @method isArray
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true if the object is a array and false otherwise.
 */
module.exports = (object) => 'Array' === getTypeHelper(object);
