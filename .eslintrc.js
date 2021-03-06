module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  env: {
    jest: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'lines-between-class-members': 'off',

    'import/prefer-default-export': 'off',
  },
}
