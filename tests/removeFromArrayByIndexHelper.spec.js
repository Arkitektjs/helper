const removeFromArrayByIndexHelper = require('../src/removeFromArrayByIndexHelper');

describe('Unit test for removeFromArrayByIndexHelper', () => {
  test('Returns an array', () => {
    const anArray     = ['Apple', 'Banana', 'Orange'];
    const resultArray = removeFromArrayByIndexHelper(anArray, 0);
    expect(Array.isArray(resultArray)).toBeTruthy();
  });

  test('Removes first argument', () => {
    const anArray     = ['Apple', 'Banana', 'Orange'];
    const resultArray = removeFromArrayByIndexHelper(anArray, 0);
    expect(resultArray).toEqual(['Banana', 'Orange']);
  });
});
