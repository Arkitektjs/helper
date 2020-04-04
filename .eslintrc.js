module.exports = {
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'sort-requires',
  ],
  rules: {
    'class-methods-use-this': ['off'],
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
    'max-lines-per-function': ['error', 120],
    'max-params': ['error', 4],
    'newline-before-return': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-eval': 'error',
    'no-multi-spaces': ['off'],
    'no-param-reassign': 'off',
    'no-return-await': ['off'],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'quote-props': ['error', 'as-needed'],
    'sort-keys': ['error', 'asc', {
      caseSensitive: true,
      minKeys: 2,
      natural: false,
    }],
    'sort-requires/sort-requires': 2,
    yoda: ['error', 'always'],
  },
};
