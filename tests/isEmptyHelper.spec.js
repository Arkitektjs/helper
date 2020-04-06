const isEmptyHelper = require('../src/isEmptyHelper');

describe('isEmptyHelper', () => {
  it('should return empty type', () => {
    const result = isEmptyHelper({}) && isEmptyHelper(null)
      && isEmptyHelper([]) && isEmptyHelper(0) && isEmptyHelper(NaN)
      && isEmptyHelper('') && isEmptyHelper(false);

    expect(result).toBeTruthy();
  });

  it('should not return empty type', () => {
    const result = isEmptyHelper({ name: 'john' }) && isEmptyHelper(null)
      && isEmptyHelper([]) && isEmptyHelper(0) && isEmptyHelper(NaN)
      && isEmptyHelper('') && isEmptyHelper(false);

    expect(result).toBeFalsy();
  });
});
