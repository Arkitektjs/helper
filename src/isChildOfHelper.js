const isHtmlElementHelper = require('./isHtmlElementHelper.js');

/**
 * Checks if an element is child of another.
 *
 * @method isChildOf
 * @param {Node||HTMLElement} child Element to check.
 * @param {HTMLElement} parent Container element.
 * @return {boolean}
 */
module.exports = (child, parent) => {
  if (!isHtmlElementHelper(child) || !isHtmlElementHelper(parent)) {
    return false;
  }

  while (child) {
    child = child.parentNode;
    if (child === parent) {
      return true;
    }
  }

  return false;
};
