/**
 * Gets type of any object.
 *
 * @method getType
 * @param {any} object Object we want to know the type.
 * @return {String} Returns the type of object.
 */
module.exports = (object) => {
  if (null === object) {
    return null;
  }
  const t = (typeof object);
  if ('object' === t) {
    const objectConstructor = String(object.constructor);
    if (/^(?:function|object) ([a-z0-9-]+)\(?/i.test(objectConstructor)) {
      return  RegExp.$1;
    }

    try {
      return object.constructor.name;
    } catch (e) {
      return undefined;
    }
  }

  return t;
};
