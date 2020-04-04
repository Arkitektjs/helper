const getByKeyHelper = require('../src/getByKeyHelper');

const car = {
  countries: {
    french: 'peugeot',
  },
  type: 'Fiat',
};

describe('Unit test for getByKeyHelper', () => {
  test(' Get array object value by key.', () => {
    const result = getByKeyHelper(car, 'countries.french');
    expect(result).toEqual('peugeot');
  });
});
