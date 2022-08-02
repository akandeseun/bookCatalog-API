module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: 0,
    indent: 2,
    'no-new': 0,
    'no-console': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'operator-linebreak': 0,
    'no-unused-expressions': 0,
    'space-before-function-paren': 0,
    'sort-keys': [0, 'asc', { caseSensitive: true, natural: true, minKeys: 2 }]
  }
}
