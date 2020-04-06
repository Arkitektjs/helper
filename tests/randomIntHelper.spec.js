const randomIntHelper = require('../src/randomIntHelper');

describe('randomIntHelper', () => {
  it('should return random int', () => {
    expect(randomIntHelper(20)).toBeLessThan(20);
  });
});
