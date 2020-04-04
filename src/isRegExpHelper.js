const getTypeHelper = require('./getTypeHelper.js');

/**
 * Checks if an object is regular expression.
 *
 * @method isRegExp
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true if the object is regular expression and false otherwise.
 */
module.exports = (object) => 'RegExp' === getTypeHelper(object);
