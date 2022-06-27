const settings = require('@vue-storefront/eslint-config-typescript/config/settings/import');

module.exports = {
  settings: {
    ...settings.settings,
    'import/resolver': {
      ...settings['import/resolver'],
      project: [
        'tsconfig.json',
      ],
    },
  },
}
