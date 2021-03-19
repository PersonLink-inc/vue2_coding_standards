# Vue2.* + Typescript ESLintの設定方法
※ vue-cliで作成した環境例

## 環境情報
```json
{
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^4.5.0",
    "@typescript-eslint/parser": "^4.5.0",
    "@vue/cli-plugin-eslint": "^4.5.11",
    "@vue/eslint-config-typescript": "^7.0.0",
    "eslint": ">=1.6.0 <7.0.0",
    "eslint-plugin-vue": "^7.0.1",
    ...
  }
}
```

## モジュールの追加
`yarn`または、`npm`でモジュールを追加します。
```bash
$ yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-eslint @vue/eslint-config-typescript eslint eslint-plugin-vue

# or

$ npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-eslint @vue/eslint-config-typescript eslint eslint-plugin-vue
```

## 設定ファイルの追加
[.eslintrc.js](./.eslintrc.js) を導入したいプロジェクトのrootに配置してください。

## package.jsonに追記
```json
{
  "scripts": {
    "lint": "vue-cli-service lint",
    ...
  },
}
```

## ESLint 実行
```bash
$ yarn lint

# or

$ npm lint
```