module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        arrowParens: 'always',
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        vueIndentScriptAndStyle: true
      }
    ],
    'no-unused-vars': 'off'
  }
}
