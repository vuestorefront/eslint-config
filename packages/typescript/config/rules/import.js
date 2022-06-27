module.exports = {
  rules: {
    'import/no-unresolved': 'error',
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
  },
}
