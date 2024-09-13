module.exports = {
  overrides: [
    {
      files: ['src/components/Thumbnail.ts'],
      rules: {
        '@next/next/no-img-element': 'off',
      },
    },
  ],
};
