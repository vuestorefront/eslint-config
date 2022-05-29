module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    vueFeatures: {
      filter: false,
    },
    extraFileExtensions: [
      '.vue',
      '.md',
      '.json',
      '.jsonc',
      '.json5',
      '.yml',
      '.yaml',
      '.html',
    ],
  },
}
