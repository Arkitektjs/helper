const removeFromArrayByIndexHelper = require('../src/removeFromArrayByIndexHelper');

describe('removeFromArrayByIndexHelper', () => {
  it('should return an array', () => {
    const anArray     = ['Apple', 'Banana', 'Orange'];
    const resultArray = removeFromArrayByIndexHelper(anArray, 0);
    expect(Array.isArray(resultArray)).toBeTruthy();
  });

  it('should remove first argument', () => {
    const anArray     = ['Apple', 'Banana', 'Orange'];
    const resultArray = removeFromArrayByIndexHelper(anArray, 0);
    expect(resultArray).toEqual(['Banana', 'Orange']);
  });
});
