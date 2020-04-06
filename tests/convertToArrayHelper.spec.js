const convertToArrayHelper = require('../src/convertToArrayHelper');

describe('convertToArrayHelper', () => {
  it('should convert from object', () => {
    const car = {
      color: 'white',
      model: '500',
      type: 'Fiat',
    };

    const result = convertToArrayHelper(car);
    expect(result).toEqual(['color', 'model', 'type']);
  });

  it('should convert from string', () => {
    const str = 'hello';

    expect(convertToArrayHelper(str)).toEqual(['h', 'e', 'l', 'l', 'o']);
  });
});
