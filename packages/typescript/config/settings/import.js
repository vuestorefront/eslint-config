module.exports = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.vue'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.vue'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
