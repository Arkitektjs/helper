const getTypeHelper = require('./getTypeHelper.js');

/**
 * Checks if an object is a object.
 *
 * @method isObject
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true if the object is a object and false otherwise.
 */
module.exports = (object) => 'Object' === getTypeHelper(object);
