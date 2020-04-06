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

describe('mergeObjectHelper', () => {
  it('should be value1change for key1', () => {
    expect(result.key1).toStrictEqual('value1Change');
  });

  it('should be exist', () => {
    expect(result.key2.key2).toStrictEqual('key2-value2');
  });

  it('should be an object', () => {
    expect(result.key3).toStrictEqual({});
  });
});
