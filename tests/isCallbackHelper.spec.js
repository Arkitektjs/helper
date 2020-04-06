const isCallbackHelper = require('../src/isCallbackHelper');

describe('isCallbackHelper', () => {
  it('should return function type', () => {
    expect(isCallbackHelper(() => {})).toBeTruthy();
  });

  it('should not return function type', () => {
    expect(isCallbackHelper({})).toBeFalsy();
  });
});
