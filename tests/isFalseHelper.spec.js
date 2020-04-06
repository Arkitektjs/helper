const isFalseHelper = require('../src/isFalseHelper');

describe('isFalseHelper', () => {
  it('should return false type', () => {
    expect(isFalseHelper(false)).toBeTruthy();
  });

  it('should not return false type', () => {
    expect(isFalseHelper({})).toBeFalsy();
  });
});
