const ellipsisHelper = require('../src/ellipsisHelper');

describe('Unit test for ellipsisHelper', () => {
  test('Returns a string', () => {
    const longString = '1234567891011121314151617';
    expect(ellipsisHelper(longString, 4)).toBe('1234...');
  });

  test('String of length > 12 is truncated', () => {
    const longString = '1234567891011121314151617';
    expect(ellipsisHelper(longString)).toBe('123456789101...');
  });

  test('String of length < 12 is not truncated', () => {
    const shortString = '12345678910';
    expect(ellipsisHelper(shortString)).toBe('12345678910');
  });

  test('String of length == 12 is not truncated', () => {
    const aString = '123456789101';
    expect(ellipsisHelper(aString)).toBe('123456789101');
  });
});
