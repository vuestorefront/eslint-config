module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: true,
    },
    extraFileExtensions: [
      '.md',
      '.json',
      '.jsonc',
      '.json5',
      '.yml',
      '.yaml',
      '.html',
    ],
  },
};
