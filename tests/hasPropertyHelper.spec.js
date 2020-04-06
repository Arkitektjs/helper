const hasPropertyHelper = require('../src/hasPropertyHelper');

describe('hasPropertyHelper', () => {
  const user = {
    name: 'John',
  };

  it('should have name property', () => {
    expect(hasPropertyHelper(user, 'name')).toBeTruthy();
  });
});
