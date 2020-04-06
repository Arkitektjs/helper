const isHtmlElementHelper = require('../src/isHtmlElementHelper');

describe('isHtmlElementHelper', () => {
  it('should return HTMLElement type', () => {
    expect(isHtmlElementHelper(document.createElement('div'))).toBeTruthy();
  });

  it('should not return HTMLElement type', () => {
    expect(isHtmlElementHelper({})).toBeFalsy();
  });
});
