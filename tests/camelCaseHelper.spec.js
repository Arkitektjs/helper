const toCamelCaseHelper = require('../src/toCamelCaseHelper');

describe('Unit test for camelCaseHelper', () => {
  test('Converts text to camelCase', () => {
    let result = toCamelCaseHelper('java script');
    expect(result).toEqual('javaScript');

    result = toCamelCaseHelper('java.script');
    expect(result).toEqual('javaScript');
  });
});
