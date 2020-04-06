const isFunctionHelper = require('../src/isFunctionHelper');

describe('isFunctionHelper', () => {
  it('should return function type', () => {
    expect(isFunctionHelper(() => {})).toBeTruthy();
  });

  it('should not return function type', () => {
    expect(isFunctionHelper(45)).toBeFalsy();
  });
});
