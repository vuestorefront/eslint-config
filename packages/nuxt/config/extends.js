module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@vue-storefront/eslint-config-typescript',
    '@vue-storefront/eslint-config-vue',
  ],
  parserOptions: {
    project: ['tsconfig.json'],
  },
}
