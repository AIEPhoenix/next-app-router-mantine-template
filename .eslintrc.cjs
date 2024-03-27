module.exports = {
  extends: ['mantine', 'next/core-web-vitals', "prettier"],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/no-unknown-property': ['error', {ignore: ['css']}],
  },
};
