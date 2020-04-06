const upperFirstHelper = require('../src/upperFirstHelper');

describe('upperFirstHelper', () => {
  it('should be uppercase', () => {
    const phrase = 'once upon a time';
    const result = upperFirstHelper(phrase);

    expect(result).toBe('Once upon a time');
  });
});
