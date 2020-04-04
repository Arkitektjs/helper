const getTypeHelper = require('./getTypeHelper.js');

/**
 * Checks if an object is a DOM element.
 *
 * @method isHtmlElement
 * @param {any} object Object we want to know the type.
 * @return {Boolean} Returns true if the object is a DOM element and false otherwise.
 */
module.exports = (object) => /^html[a-z]*element$/i.test(getTypeHelper(object));
