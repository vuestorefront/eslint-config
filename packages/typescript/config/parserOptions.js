module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module',
    project: ['tsconfig.json'],
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
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
};
