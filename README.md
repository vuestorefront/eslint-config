# @vue-storefront/eslint-config

[![npm](https://img.shields.io/npm/v/@vue-storefront/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@vue-storefront/eslint-config)

- AirBnb
- Prettier
- TypeScript
- Vue
- Nuxt
- Lint also for json, yaml, markdown

## Usage

### Install

```bash
pnpm add -D eslint @vue-storefront/eslint-config
```

### Config `.eslintrc`

Base
```json
{
  "extends": "@vue-storefront-base"
}
```

Nuxt 3
```json
{
  "extends": "@vue-storefront-nuxt"
}
```


```json
{
  "extends": "@vue-storefront"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
## License

MIT
