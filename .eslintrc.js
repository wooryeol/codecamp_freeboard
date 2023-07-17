module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: '**/tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/semi': 'off',
    "@typescript-eslint/no-misused-promises": "off",
    'react/display-name': 'off'

    // '@typescript-eslint/quotes': 'off',
    // '@typescript-eslint/space-before-function-paren': 'off',
    // '@typescript-eslint/comma-dangle': 'off',
    // 'indent': 'off',
    // 'comma-dangle': 'off',
    // 'semi': 'off',
    // 'quote-props': 'off',
    // 'quotes': 'off',
    // 'padded-blocks': 'off',
    // 'space-before-function-paren': 'off',
    // '@typescript-eslint/member-delimiter-style': 'off'
  }
}
