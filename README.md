# @vue-storefront/eslint-config

[![npm](https://img.shields.io/npm/v/@vue-storefront/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@vue-storefront/eslint-config)

Eslint configuration for:
- JavaScript
- Typescript
- Nuxt 3
- Nuxt 2
- Vue 3
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

### Base Config
#### Install
```bash
pnpm add -D eslint @vue-storefront/eslint-config-base
```

#### Config `.eslintrc`
```json
{
  "extends": "@vue-storefront-base"
}
```

### TypeScript Config
#### Install
```bash
pnpm add -D eslint @vue-storefront/eslint-config-typescript
```

#### Config `.eslintrc`
```json
{
  "extends": "@vue-storefront-typescript"
}
```

### Nuxt 3 Config
#### Install
```bash
pnpm add -D eslint @vue-storefront/eslint-config-nuxt
```

#### Config `.eslintrc`
```json
{
  "extends": "@vue-storefront-nuxt"
}
```

### Nuxt 2 Config
#### Install
```bash
pnpm add -D eslint @vue-storefront/eslint-config-nuxt2
```

#### Config `.eslintrc`
```json
{
  "extends": "@vue-storefront-nuxt2"
}
```

### Vue 3 Config
#### Install
```bash
pnpm add -D eslint @vue-storefront/eslint-config-vue
```

#### Config `.eslintrc`
```json
{
  "extends": "@vue-storefront-vue"
}
```

### Vue 2 Config
#### Install

```bash
pnpm add -D eslint @vue-storefront/eslint-config-vue2
```

#### Config `.eslintrc`
```json
{
  "extends": "@vue-storefront-vue2"
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

## License

MIT
