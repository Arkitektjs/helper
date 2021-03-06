/**
 * Inserts one element after another.
 *
 * @method insertAfter
 * @param {HTMLElement} element Element to insert.
 * @param {HTMLElement} afterElement Insert an element after this one.
 * @return {boolean} Returns true if everything went well and false otherwise.
 */
module.exports = (element, afterElement) => {
  let parent;
  try { parent = afterElement.parentNode; } catch (e) { parent = false; }

  if (!parent) {
    return false;
  }
  const next = afterElement.nextElementSibling;
  if (next) {
    parent.insertBefore(element, next);
  } else {
    parent.appendChild(element);
  }

  return true;
};
