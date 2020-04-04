/**
 * Generates unique id.
 *
 * @method generateUniqueId
 * @param {Number} count Length of id.
 * @return {Number} Returns generated id.
 */
module.exports = (count = 6) => Math.floor(Math.random() * (10 ** count));
