module.exports = {
  rules: {
    // region ESLINT RULES
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-promise-reject-errors': 'off',
    quotes: ['error', 'single'],
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
      },
    ],
    'no-var': 'warn',
    'object-shorthand': ['warn', 'properties'],
    'spaced-comment': [
      'error',
      'always',
      {
        line: { markers: ['*package', '!', '/', ',', '='] },
        block: {
          balanced: true,
          markers: ['*package', '!', ',', ':', '::', 'flow-include'],
          exceptions: ['*'],
        },
      },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'always'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['error', 'both'],
    yoda: ['error', 'never'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'no-param-reassign': 'off',
    // endregion
  },
}
