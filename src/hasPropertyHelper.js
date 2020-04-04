/**
 * Checks if an object has a property.
 *
 * @method hasProperty
 * @param {Object} object Object.
 * @param {String} property Property to check.
 * @return {Boolean} Returns true if object has property and false otherwise.
 */
module.exports = (object, property) => Object.prototype.hasOwnProperty.call(object, property);
