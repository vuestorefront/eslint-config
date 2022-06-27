module.exports = {
  rules: {
    'unicorn/no-null': 0,
    'unicorn/no-reduce': 0,
    'unicorn/no-array-for-each': 0,
    'unicorn/no-object-as-default-parameter': 0,
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/consistent-function-scoping': 0,
    'unicorn/no-new-array': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-array-some': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/catch-error-name': [
      2,
      {
        name: 'error',
        ignore: ['^e(rr)?$'],
      },
    ],
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': [
      'error',
      {
        'cases': {
          'camelCase': true,
          'pascalCase': true,
          'kebabCase': false,
        },
        'ignore': [
          /\w*\.md$/i,
          /\w*\.yml$/i,
          /\w*\.yaml$/i,
          /\w*\.json$/i,
        ],
      },
    ],
  },
}
