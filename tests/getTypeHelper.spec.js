const getTypeHelper       = require('../src/getTypeHelper');
const isArrayHelper       = require('../src/isArrayHelper');
const isCallbackHelper    = require('../src/isCallbackHelper');
const isEmptyHelper       = require('../src/isEmptyHelper');
const isFormDataHelper    = require('../src/isFormDataHelper');
const isHtmlElementHelper = require('../src/isHtmlElementHelper');
const isNumberHelper      = require('../src/isNumberHelper');
const isObjectHelper      = require('../src/isObjectHelper');

describe('Unit test for getTypeHelper', () => {
  test('Type must be a string', () => {
    expect(getTypeHelper('Hello World')).toBe('string');
  });

  test('Type must be a null', () => {
    expect(getTypeHelper(null)).toBeNull();
  });

  test('Type must be a callback', () => {
    expect(isCallbackHelper(() => {})).toBeTruthy();
  });

  test('Type must be a FormData', () => {
    expect(isFormDataHelper(new FormData())).toBeTruthy();
  });

  test('Type must be a Number', () => {
    expect(isNumberHelper(123)).toBeTruthy();
  });

  test('Type must be an object', () => {
    expect(isObjectHelper({})).toBeTruthy();
  });

  test('Type must be an array', () => {
    expect(isArrayHelper([])).toBeTruthy();
  });

  test('Type must be an html element', () => {
    expect(isHtmlElementHelper(document.createElement('div'))).toBeTruthy();
  });

  test('Checks if an Object is empty', () => {
    const result = isEmptyHelper({}) && isEmptyHelper(null)
      && isEmptyHelper([]) && isEmptyHelper(0) && isEmptyHelper(NaN)
      && isEmptyHelper('') && isEmptyHelper(false);

    expect(result).toBeTruthy();
  });
});
