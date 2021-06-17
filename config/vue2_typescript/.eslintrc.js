/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Linter for debug code
    // -----------------------
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Linter for styled code
    // -----------------------
    'quotes': ['error', 'single'],                                                 // 'を強要する
    'space-in-parens': ['error', 'never'],                                         // 括弧内の空間制限を強要する
    'no-multi-spaces': 'error',                                                    // 不要な空白を入れない
    'no-multiple-empty-lines': ['error', {'max': 1}],                              // 空白行は最大1行に納める
    'comma-dangle': 'off',                                                         // @typescript-eslintで設定する為 off
    '@typescript-eslint/comma-dangle': ['error', 'never'],                         // ,を必要とする箇所で最終行には,を入れないを強要する。
    'indent': 'off',                                                               // @typescript-eslintで設定する為 off
    '@typescript-eslint/indent': ['error', 2],                                     // 半角スペース2つでのインデントを強要する
    'semi-style': ['error', 'last'],                                               // ;を行末につけることを強要する
    'semi-spacing': ['error', { after: false, before: false }],                    // ;の前後にはスペースは入れない
    'semi': 'off',                                                                 // @typescript-eslintで設定する為 off
    '@typescript-eslint/semi': ['error', 'always'],                                // 文末に;を必ずつける
    'no-extra-semi': 'off',                                                        // @typescript-eslintで設定する為 off
    '@typescript-eslint/no-extra-semi': ['error'],                                 // 余分なセミコロンを禁止する
    'space-before-function-paren': 'off',                                          // @typescript-eslintで設定する為 off
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],          // メソッドの()の前に空間を空けないことを強要する

    // Linter for Ts & Js
    // -----------------------
    'no-undef': 'off',                                                             // (定義されていない値を利用しようとした場合err) グローバル変数(NodeJS)を利用する為に off
    'no-useless-catch': 'off',                                                     // catch内でエラーを返すのみであることを許容する
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],      // objectを型宣言する際にinterfaceでの作成を強要する
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': false
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      }
    }],                                                                            // 型定義する際の区切りを,であることと、最後の要素に,を付けないことを強要する
    '@typescript-eslint/explicit-module-boundary-types': 'off',                    // 必要以上に型を付与しないことを許容する
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      { accessibility: 'explicit' }
    ],                                                                             // アクセス修飾子をつけさせることを警告する

    // Linter for Vue
    // -----------------------
    "vue/v-on-event-hyphenation": ["error", "always"],                             // v-onイベントの命名スタイルを強要する
    "vue/custom-event-name-casing": ["error", "kebab-case"],                       // emitイベントの命名スタイルを強要する
    "vue/v-on-function-call": ["error", "always"],                                 // templateにおけるメソッド実行宣言を強要する

    // Linter for Other
    // -----------------------
    'no-unexpected-multiline': 'error',                                            // 意図に反して2つの文が接続された箇所を警告する。 ASI による落とし穴を防止する対応
    'no-unreachable': 'error'                                                      // 到達できない文を警告する。 ASI による落とし穴を防止する対応
  }
};
