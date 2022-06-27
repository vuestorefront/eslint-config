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
  rules: {
    'import/no-unresolved': 'error',
    'import/extensions': ['error',
      {
        ...extensions.map((extension) => ({ [extension]: 'never' })),
      },
    ],
  },
}
