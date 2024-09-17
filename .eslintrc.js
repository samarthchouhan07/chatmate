module.exports = {
  "parser": "babel-eslint",
  overrides: [
    {
      files: ['src/components/**/*.ts', 'src/components/**/*.tsx'],
      rules: {
        '@next/next/no-img-element': 'off',
      },
    },
  ],
};
