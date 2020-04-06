const isStringHelper = require('../src/isStringHelper');

describe('isStringHelper', () => {
  it('should return string type', () => {
    expect(isStringHelper('')).toBeTruthy();
  });

  it('should not return string type', () => {
    expect(isStringHelper({})).toBeFalsy();
  });
});
