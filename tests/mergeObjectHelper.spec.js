const mergeObjectHelper = require('../src/mergeObjectHelper');

const defaultValues = {
  key1: 'value1',
  key2: {
    key1: 'key2-value1',
    key2: 'key2-value2',
  },
  key3: {},
};

const values = {
  key1: 'value1Change',
  key2: {
    key1: 'key2-value1',
  },
  key3: '',
};

const result = mergeObjectHelper(defaultValues, values);

describe('Unit test for mergeObjectHelper', () => {
  test('Value of key1 must be value1Change', () => {
    expect(result.key1).toStrictEqual('value1Change');
  });

  test('key2-value2 must exist', () => {
    expect(result.key2.key2).toStrictEqual('key2-value2');
  });

  test('Value of key3 must be an object', () => {
    expect(result.key3).toStrictEqual({});
  });
});
