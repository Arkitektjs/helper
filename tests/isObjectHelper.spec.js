const isObjectHelper = require('../src/isObjectHelper');

describe('isObjectHelper', () => {
  it('should return object type', () => {
    expect(isObjectHelper({})).toBeTruthy();
  });

  it('should not return object type', () => {
    expect(isObjectHelper(0)).toBeFalsy();
  });
});
