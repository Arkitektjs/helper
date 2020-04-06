const ellipsisHelper = require('../src/ellipsisHelper');

describe('ellipsisHelper', () => {
  it('should return 4 characters', () => {
    const longString = '1234567891011121314151617';
    expect(ellipsisHelper(longString, 4)).toBe('1234...');
  });

  it('should truncate if length of string is greater than 12', () => {
    const longString = '1234567891011121314151617';
    expect(ellipsisHelper(longString)).toBe('123456789101...');
  });

  it('should not truncate if length of string is lower than 12', () => {
    const shortString = '12345678910';
    expect(ellipsisHelper(shortString)).toBe('12345678910');
  });

  it('should not truncate if length of string is equal to 12', () => {
    const aString = '123456789101';
    expect(ellipsisHelper(aString)).toBe('123456789101');
  });
});
