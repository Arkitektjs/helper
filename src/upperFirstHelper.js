/**
 * Converts the first character of string to upper case.
 *
 * @method upperFirst
 * @param {String} text The string to convert.
 * @return {String} Returns the converted string.
 */
module.exports = (text) => (text.slice(0, 1)).toUpperCase() + text.slice(1);
