const isBlankHelper = require('../src/isBlankHelper');

describe('isBlankHelper', () => {
  it('should be blank', () => {
    expect(isBlankHelper('')).toBeTruthy();
  });
});
