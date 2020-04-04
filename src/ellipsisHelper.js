/**
 * Truncates a string.
 *
 * @method ellipsis
 * @param {String} text The string to truncate.
 * @param {Number} count Number of char.
 * @return {String} Returns the truncated string.
 */
module.exports = (text, count = 12) => ((text.length > count) ? `${text.substring(0, count)}...` : text);
