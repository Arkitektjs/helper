const isArrayHelper = require('../src/isArrayHelper');

describe('isArrayHelper', () => {
  it('should return array type', () => {
    expect(isArrayHelper([])).toBeTruthy();
  });

  it('should not return array type', () => {
    expect(isArrayHelper({})).toBeFalsy();
  });
});
