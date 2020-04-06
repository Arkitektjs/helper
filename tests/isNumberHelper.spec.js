const isNumberHelper = require('../src/isNumberHelper');

describe('isNumberHelper', () => {
  it('should return number type', () => {
    expect(isNumberHelper(42)).toBeTruthy();
  });

  it('should not return number type', () => {
    expect(isNumberHelper({})).toBeFalsy();
  });
});
