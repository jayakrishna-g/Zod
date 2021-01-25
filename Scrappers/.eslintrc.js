module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': ['warn'],
    'prefer-destructuring': 'off',
    'no-console': 'off',
    'linebreak-style': 'off',
  },
};
