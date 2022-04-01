module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ], // disable the rule for variables, but enable it for functions and classes
  },

  ignorePatterns: ['node_modules/'],
};
