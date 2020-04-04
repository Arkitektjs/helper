const generateUniqueIdHelper = require('../src/generateUniqueIdHelper');

describe('Unit test for generateUniqueIdHelper', () => {
  test('The generated id is an integer', () => {
    expect(typeof generateUniqueIdHelper()).toBe('number');
  });

  test('100 generated Ids are uniques', () => {
    const id = generateUniqueIdHelper();
    for (let i = 0; 100 > i; i += 1) {
      const idTemp = generateUniqueIdHelper();
      expect(id).not.toEqual(idTemp);
    }
  });
});
