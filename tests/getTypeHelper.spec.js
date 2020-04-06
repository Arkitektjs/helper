const getTypeHelper       = require('../src/getTypeHelper');

describe('getTypeHelper', () => {
  it('should be a string', () => {
    expect(getTypeHelper('Hello World')).toBe('string');
  });

  it('should be a number', () => {
    expect(getTypeHelper(42)).toBe('number');
  });

  it('should be an array', () => {
    expect(getTypeHelper([])).toBe('Array');
  });

  it('should be a boolean', () => {
    expect(getTypeHelper(true)).toBe('boolean');
  });

  it('should be a FormData', () => {
    expect(getTypeHelper(new FormData())).toBe('FormData');
  });

  it('should be a function', () => {
    expect(getTypeHelper(() => {})).toBe('function');
  });

  it('should be a html element', () => {
    expect(getTypeHelper(document.createElement('div'))).toMatch(/^html[a-z]*element$/i);
  });

  it('should be an object', () => {
    expect(getTypeHelper({})).toBe('Object');
  });

  it('should be a RegExp', () => {
    expect(getTypeHelper(/.*/)).toBe('RegExp');
  });
});
