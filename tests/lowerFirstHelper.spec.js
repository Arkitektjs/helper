const lowerFirstHelper = require('../src/lowerFirstHelper');

describe('lowerFirstHelper', () => {
  it('should make first character to lowercase', () => {
    expect(lowerFirstHelper('Hello')).toEqual('hello');
  });
});
