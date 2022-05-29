const basic = require('@vue-storefront/eslint-config-base');

module.exports = {
  overrides: [...basic.overrides,
      {
        files: ['*.d.ts'],
        rules: {
          'import/no-duplicates': 'off',
        },
      },
      {
        files: ['*.js'],
        rules: {
          '@typescript-eslint/no-var-requires': 'off',
        },
      },
    ],
}
