# @vue-storefront/eslint-config

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
[![npm](https://img.shields.io/npm/v/@vue-storefront/eslint-config-base)](https://npmjs.com/package/@vue-storefront/eslint-config-base)
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
[![npm](https://img.shields.io/npm/v/@vue-storefront/eslint-config-typescript)](https://npmjs.com/package/@vue-storefront/eslint-config-typescript)
#### Install
```bash
pnpm add -D eslint @vue-storefront/eslint-config-typescript
```

#### Config `.eslintrc`
```json
{
  "extends": "@vue-storefront-ts"
}
```

### Nuxt 3 Config
[![npm](https://img.shields.io/npm/v/@vue-storefront/eslint-config-nuxt)](https://npmjs.com/package/@vue-storefront/eslint-config-nuxt)
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
[![npm](https://img.shields.io/npm/v/@vue-storefront/eslint-config-nuxt2)](https://npmjs.com/package/@vue-storefront/eslint-config-nuxt2)
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
[![npm](https://img.shields.io/npm/v/@vue-storefront/eslint-config-vue)](https://npmjs.com/package/@vue-storefront/eslint-config-vue)
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
[![npm](https://img.shields.io/npm/v/@vue-storefront/eslint-config-vue2)](https://npmjs.com/package/@vue-storefront/eslint-config-vue2)
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
