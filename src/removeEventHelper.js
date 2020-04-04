/**
 * Removes event.
 *
 * @method removeEvent
 * @param {HTMLElement|Document} element Target element.
 * @param {String} event Event name.
 * @param {Function} callback Event callback.
 * @return {void}
 */
module.exports = (element, event, callback) => {
  if (element.removeEventListener) {
    element.removeEventListener(event, callback, false);
  } else {
    element.detachEvent(`on${event}`, callback);
  }
};
