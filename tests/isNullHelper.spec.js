const isNullHelper = require('../src/isNullHelper');

describe('isNullHelper', () => {
  it('should return null type', () => {
    expect(isNullHelper(null)).toBeTruthy();
  });

  it('should not return null type', () => {
    expect(isNullHelper({})).toBeFalsy();
  });
});
