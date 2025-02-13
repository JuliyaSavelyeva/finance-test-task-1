module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  rules: {
    'no-console': 0,
    'no-alert': 0,
    'import/prefer-default-export': 0,
    'prefer-template': 0,
    'import/extensions': 0,
    'no-unused-vars': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-constant-condition': 0,
    'no-restricted-globals': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    camelcase: 0,
    'import/no-named-as-default-member': 0,
    'react/no-unused-state': 0,
    'react/state-in-constructor': 0,
  },
};
