const getByKeyHelper = require('../src/getByKeyHelper');

const car = {
  countries: {
    french: 'peugeot',
  },
  type: 'Fiat',
};

describe('getByKeyHelper', () => {
  it('should get value by its key', () => {
    const result = getByKeyHelper(car, 'countries.french');
    expect(result).toEqual('peugeot');
  });
});
