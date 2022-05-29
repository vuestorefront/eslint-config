module.exports = {
  settings: {
    'import/parsers': {
      'import/extensions': ['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.vue'],
    },
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.vue', '.d.ts'] },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
