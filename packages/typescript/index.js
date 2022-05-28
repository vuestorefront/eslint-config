const basic = require('@vue-storefront/eslint-config-base')

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    '@vue-storefront/eslint-config-base',
    'airbnb-typescript/base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
    },
  },
  overrides:
    [...basic.overrides,
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
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^ignore',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: { extensions: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.d.ts'] },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
