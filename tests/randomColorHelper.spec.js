const randomColorHelper = require('../src/randomColorHelper');

describe('Unit test for randomColorHelper', () => {
  test('Color should match the expected syntax', () => {
    const color      = randomColorHelper();
    const expression = /^#([A-Fa-f0-9]{6})$/;

    expect(color).toMatch(expression);
  });
});
