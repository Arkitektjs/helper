/**
 * Removes value from array using its index.
 *
 * @method removeFromArrayByIndex
 * @param {Array} values Values.
 * @param {Number} index Index of value to remove.
 * @return {Array} Returns array without value.
 */
module.exports = (values, index) => {
  if (-1 < index) {
    values.splice(index, 1);
  }

  return values;
};
