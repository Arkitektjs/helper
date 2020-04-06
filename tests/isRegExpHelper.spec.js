const isRegExpHelper = require('../src/isRegExpHelper');

describe('isRegExpHelper', () => {
  it('should return RegExp type', () => {
    expect(isRegExpHelper(/.*/)).toBeTruthy();
  });

  it('should not return RegExp type', () => {
    expect(isRegExpHelper({})).toBeFalsy();
  });
});
