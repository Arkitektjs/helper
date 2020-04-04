const upperFirstHelper = require('../src/upperFirstHelper');

describe('Unit test for upperFirstHelper', () => {
  test('First letter must be uppercase', () => {
    const phrase = 'il était une fois';
    const result = upperFirstHelper(phrase);

    expect(result).toBe('Il était une fois');
  });
});
