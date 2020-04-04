/**
 * Converts the first character of string to lower case.
 *
 * @method lowerFirst
 * @param {String} text The string to convert.
 * @return {String} Returns the converted string.
 */
module.exports = (text) => (text.slice(0, 1)).toLowerCase() + text.slice(1);
