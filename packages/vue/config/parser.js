module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['tsconfig.json'],
    vueFeatures: {
      filter: false,
    },
    extraFileExtensions: [
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
    ],
  },
}
