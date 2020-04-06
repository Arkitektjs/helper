const generateUniqueIdHelper = require('../src/generateUniqueIdHelper');

describe('generateUniqueIdHelper', () => {
  it('should generate a number', () => {
    expect(typeof generateUniqueIdHelper()).toBe('number');
  });

  it('should generate unique random numbers', () => {
    const id = generateUniqueIdHelper();
    for (let i = 0; 100 > i; i += 1) {
      const idTemp = generateUniqueIdHelper();
      expect(id).not.toEqual(idTemp);
    }
  });
});
