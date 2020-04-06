const randomColorHelper = require('../src/randomColorHelper');

describe('randomColorHelper', () => {
  it('should be match the expected syntax', () => {
    const color      = randomColorHelper();
    const expression = /^#([a-f0-9]{6})$/;

    expect(color).toMatch(expression);
  });
});
