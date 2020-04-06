const setByKeyHelper = require('../src/setByKeyHelper');

const car = {
  type: 'Fiat',
};

describe('setByKeyHelper', () => {
  it('should not be added', () => {
    const result = setByKeyHelper(car, '', 20000);
    expect(result).toStrictEqual({ type: 'Fiat' });
  });

  it('should be added', () => {
    let result = setByKeyHelper(car, 'price', 20000);
    expect(result).toStrictEqual({ price: 20000, type: 'Fiat' });
    result = setByKeyHelper(car, 'price.max', 400000);
    expect(result).toStrictEqual({ price: { max: 400000 }, type: 'Fiat' });
  });
});
