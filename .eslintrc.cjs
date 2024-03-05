module.exports = {
  extends: ['mantine', 'next/core-web-vitals'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
