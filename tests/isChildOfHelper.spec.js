const isChildOfHelper = require('../src/isChildOfHelper');

describe('isChildOfHelper', () => {
  it('should be a child of another', () => {
    const parent = document.createElement('div');
    const child  = document.createElement('p');

    parent.appendChild(child);
    const result = isChildOfHelper(child, parent);

    expect(result).toBeTruthy();
  });

  it('should not be a child of another', () => {
    const parent     = document.createElement('div');
    const child      = document.createElement('p');
    const falseChild = document.createElement('p');

    parent.appendChild(child);

    const result = isChildOfHelper(falseChild, parent);

    expect(result).toBeFalsy();
  });
});
