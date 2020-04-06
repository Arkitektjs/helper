const isUndefinedHelper = require('../src/isUndefinedHelper');

describe('isUndefinedHelper', () => {
  it('should return undefined type', () => {
    expect(isUndefinedHelper(undefined)).toBeTruthy();
  });

  it('should not return undefined type', () => {
    expect(isUndefinedHelper({})).toBeFalsy();
  });
});
