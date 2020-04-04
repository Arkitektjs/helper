/**
 * Converts text to camelCase.
 *
 * @method camelCase
 * @param {String} text The string to convert.
 * @return {String} Returns the converted string.
 */
module.exports = (text) => text
  .replace(/\./g, ' ')
  .replace(/\s(.)/g, ($1) => $1.toUpperCase())
  .replace(/-(.)/g, ($1) => $1.toUpperCase())
  .replace(/\s/g, '')
  .replace(/-/g, '')
  .replace(/^(.)/, ($1) => $1.toLowerCase());
