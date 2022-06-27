const extensions = [
  '.cjs',
  '.html',
  '.js',
  '.json',
  '.json5',
  '.jsonc',
  '.jsx',
  '.md',
  '.mjs',
  '.ts',
  '.tsx',
  '.vue',
  '.yaml',
  '.yml',
];

module.exports = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': extensions,
    },
    'import/extensions': extensions,
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
