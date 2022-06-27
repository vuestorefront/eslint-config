[![@vue-storefront/eslint-config-nuxt2](./cover.png)]()

# @vue-storefront/eslint-config-nuxt2

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Vue Storefront eslint standards for Nuxt 2

## Information

Eslint configuration for:
- JavaScript
- Typescript
- Nuxt 2
- Vue 2


For this eslint config package, we enable the following community standards:
- AirBnb
- Prettier

This configuration provides eslint rules for the following:
- TypeScript
- Vue
- Nuxt
- JSON
- YAML / YML
- Markdown

## Usage

#### Install
```bash
pnpm add -D eslint @vue-storefront/eslint-config-nuxt2
```

#### Config `.eslintrc`
```json{}[.eslintrc]
{
  "extends": "@vue-storefront/eslint-config-nuxt2"
}
```

### Config VS Code auto fix

Update your `.vscode/settings.json` and add the following

```json
{
  "prettier.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Contributing

You can contribute to this module online with CodeSandBox:

[![Edit @vue-storefront/eslint-config-nuxt2](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/vuestorefront/eslint-config/tree/main/?fontsize=14&hidenavigation=1&theme=dark)

Or locally:

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](../../LICENSE)

Copyright (c) Vue Storefront

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@vue-storefront/eslint-config-nuxt2/latest
[npm-version-href]: https://npmjs.com/package/@vue-storefront/eslint-config-nuxt2

[npm-downloads-src]: https://img.shields.io/npm/dm/@vue-storefront/eslint-config-nuxt2
[npm-downloads-href]: https://npmjs.com/package/@vue-storefront/eslint-config-nuxt2

[license-src]: https://img.shields.io/npm/l/@vue-storefront/eslint-config-nuxt2
[license-href]: https://npmjs.com/package/@vue-storefront/eslint-config-nuxt2