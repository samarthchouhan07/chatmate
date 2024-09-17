module.exports = {
  parser: '@typescript-eslint/parser', 
  overrides: [
    {
      files: ['src/components/**/*.ts', 'src/components/**/*.tsx'],
      rules: {
        '@next/next/no-img-element': 'off',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json', 
  },
};
