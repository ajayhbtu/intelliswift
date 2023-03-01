module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'max-len': 'off',
    'no-unused-vars': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'consistent-return': 'off',
  },
};
