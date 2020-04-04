/**
 * Generate random hexadecimal color code.
 *
 * @method randomColor
 * @return {String} Returns a random hexadecimal color code.
 */
module.exports = () => `#${
  ('0123456789ABCDEF'.split('').map(
    (v, i, a) => (5 < i ? null : a[Math.floor(Math.random() * 16)]),
  ).join('')
  ).toLowerCase()
}`;
