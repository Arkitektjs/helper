const isFormDataHelper = require('../src/isFormDataHelper');

describe('isFormDataHelper', () => {
  it('should return FormData type', () => {
    expect(isFormDataHelper(new FormData())).toBeTruthy();
  });

  it('should not return FormData type', () => {
    expect(isFormDataHelper({})).toBeFalsy();
  });
});
