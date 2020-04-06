const insertAfterHelper = require('../src/insertAfterHelper');

describe('insertAfterHelper', () => {
  const element   = document.createElement('div');
  const after     = document.createElement('p');
  element.appendChild(after);
  const child     = document.createElement('p');

  it('should be inserted after', () => {
    const result = insertAfterHelper(child, after);
    expect(result).toBeTruthy();

    expect(after.nextElementSibling).toEqual(child);
  });
});
