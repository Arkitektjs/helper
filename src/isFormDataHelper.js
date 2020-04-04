const getTypeHelper = require('./getTypeHelper.js');

/**
 * Checks if an object is a FormData.
 *
 * @method isFormData
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true if the object is a FormData and false otherwise.
 */
module.exports = (object) => 'FormData' === getTypeHelper(object);
