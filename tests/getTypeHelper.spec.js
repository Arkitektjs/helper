const getTypeHelper       = require('../src/getTypeHelper');
const isArrayHelper       = require('../src/isArrayHelper');
const isCallbackHelper    = require('../src/isCallbackHelper');
const isEmptyHelper       = require('../src/isEmptyHelper');
const isFormDataHelper    = require('../src/isFormDataHelper');
const isFunctionHelper    = require('../src/isFunctionHelper');
const isHtmlElementHelper = require('../src/isHtmlElementHelper');
const isNumberHelper      = require('../src/isNumberHelper');
const isObjectHelper      = require('../src/isObjectHelper');
const isRegExpHelper      = require('../src/isRegExpHelper');
const isStringHelper      = require('../src/isStringHelper');

describe('getTypeHelper', () => {
  it('Type must be a string', () => {
    expect(getTypeHelper('Hello World')).toBe('string');
  });

  it('should return string type', () => {
    expect(isStringHelper('my string')).toBeTruthy();
  });

  it('should return null', () => {
    expect(getTypeHelper(null)).toBeNull();
  });

  it('should return function type', () => {
    expect(isFunctionHelper(() => {})).toBeTruthy();
  });

  it('should return callback type', () => {
    expect(isCallbackHelper(() => {})).toBeTruthy();
  });

  it('should return FormData type', () => {
    expect(isFormDataHelper(new FormData())).toBeTruthy();
  });

  it('should return number type', () => {
    expect(isNumberHelper(123)).toBeTruthy();
  });

  it('should return object type', () => {
    expect(isObjectHelper({})).toBeTruthy();
  });

  it('should return array type', () => {
    expect(isArrayHelper([])).toBeTruthy();
  });

  it('should return regExp type', () => {
    expect(isRegExpHelper(/.*/)).toBeTruthy();
  });

  it('should return HtmlElement type', () => {
    expect(isHtmlElementHelper(document.createElement('div'))).toBeTruthy();
  });

  it('should check if an Object is empty', () => {
    const result = isEmptyHelper({}) && isEmptyHelper(null)
      && isEmptyHelper([]) && isEmptyHelper(0) && isEmptyHelper(NaN)
      && isEmptyHelper('') && isEmptyHelper(false);

    expect(result).toBeTruthy();
  });
});
