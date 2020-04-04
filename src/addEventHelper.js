/**
 * Adds event to element.
 *
 * @method addEvent
 * @param {HTMLElement|Document} element Target element.
 * @param {String} event Event name.
 * @param {Function} callback Event callback.
 * @return {void}
 */
module.exports = (element, event, callback) => {
  if (element.addEventListener) {
    element.addEventListener(event, callback, false);
  } else {
    element.attachEvent(`on${event}`, callback);
  }
};
