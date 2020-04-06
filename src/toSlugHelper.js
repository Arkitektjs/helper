/**
 * Converts text to slug.
 *
 * @method toSlug
 * @param {String} text The string to convert.
 * @return {String} Returns the converted string.
 */
module.exports = (text) => text.toLowerCase()
  .trim()
  .replace(/[\u00C0-\u00C5]/ig, 'a')
  .replace(/[\u00C8-\u00CB]/ig, 'e')
  .replace(/[\u00CC-\u00CF]/ig, 'i')
  .replace(/[\u00D2-\u00D6]/ig, 'o')
  .replace(/[\u00D9-\u00DC]/ig, 'u')
  .replace(/[\u00D1]/ig, 'n')
  .replace(/[ .]+/g, '-')
  .replace(/[^a-z0-9-]+/gi, '')
  .replace(/[-]{2,}/g, '-')
  .replace(/^-|-$/, '');
