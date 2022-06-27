module.exports = {
  rules: {
    // region IMPORT RULES
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/named': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
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
// endregion
  },
}
