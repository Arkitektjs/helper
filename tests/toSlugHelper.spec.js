const toSlugHelper = require('../src/toSlugHelper');

describe('toSlugHelper', () => {
  it('should convert text to camelCase', () => {
    expect(toSlugHelper('java script')).toEqual('java-script');
    expect(toSlugHelper('java.script')).toEqual('java-script');
    expect(toSlugHelper('java----script----')).toEqual('java-script');
    expect(toSlugHelper('à demain')).toEqual('a-demain');

  });
});
