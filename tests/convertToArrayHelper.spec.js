const convertToArrayHelper = require('../src/convertToArrayHelper');

describe('convertToArrayHelper', () => {
  it('should convert an object to array', () => {
    const car = {
      color: 'white',
      model: '500',
      type: 'Fiat',
    };

    const result = convertToArrayHelper(car);
    expect(result).toEqual(['color', 'model', 'type']);
  });
});
