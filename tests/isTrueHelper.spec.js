const isTrueHelper = require('../src/isTrueHelper');

describe('isTrueHelper', () => {
  it('should return true type', () => {
    expect(isTrueHelper(true)).toBeTruthy();
  });

  it('should not return true type', () => {
    expect(isTrueHelper({})).toBeFalsy();
  });
});
