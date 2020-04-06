const toCamelCaseHelper = require('../src/toCamelCaseHelper');

describe('toCamelCaseHelper', () => {
  it('should convert text to camelCase', () => {
    let result = toCamelCaseHelper('java script');
    expect(result).toEqual('javaScript');

    result = toCamelCaseHelper('java.script');
    expect(result).toEqual('javaScript');
  });
});
