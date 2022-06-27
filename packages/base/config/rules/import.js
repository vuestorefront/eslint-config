module.exports = {
  rules: {
    // region IMPORT RULES
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/named': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false },
    ],
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/extensions': ['error', {
      '.cjs': 'never',
      '.html': 'never',
      '.js': 'never',
      '.json': 'never',
      '.json5': 'never',
      '.jsonc': 'never',
      '.jsx': 'never',
      '.md': 'never',
      '.mjs': 'never',
      '.ts': 'never',
      '.tsx': 'never',
      '.vue': 'never',
      '.yaml': 'never',
      '.yml': 'never',
    }],
// endregion
  },
}
