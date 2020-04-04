const convertToArrayHelper = require('../src/convertToArrayHelper');

describe('Unit test for convertToArrayHelper', () => {
  test('Converts an object to array', () => {
    const car = {
      color: 'white',
      model: '500',
      type: 'Fiat',
    };

    const result = convertToArrayHelper(car);
    expect(result).toEqual(['color', 'model', 'type']);
  });
});
