module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-v-html': 'error',
    'vue/prop-name-casing': 'error',
    'vue/script-indent': ['error', 2, {
      "baseIndent": 0,
      "switchCase": 0,
      "ignores": []
    }]

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
