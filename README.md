# Person Link Vueコーディング規約

# 目的

# 対象のプロジェクト構成

# フォルダ構成

# 命名規則

## ファイル

### [TypeScript](https://typescript-jp.gitbook.io/deep-dive/styleguide#fairu)

camelCaseを使ってファイルに名前を付けます。例えばaccordion.tsx、myControl.tsx、utils.ts、map.tsなどです。
> 理由：多くのJSチームで慣習的です。

### [単一ファイルコンポーネントのファイル名の形式](https://jp.vuejs.org/v2/style-guide/index.html#%E5%8D%98%E4%B8%80%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E3%81%AE%E5%BD%A2%E5%BC%8F-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

全てパスカルケースにしましょう

悪い例
```
components/
|- mycomponent.vue
components/
|- myComponent.vue
```

良い例
```
components/
|- MyComponent.vue
```

## コンポーネント

### [複数単語コンポーネント名](https://jp.vuejs.org/v2/style-guide/index.html#%E8%A4%87%E6%95%B0%E5%8D%98%E8%AA%9E%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%90%8D-%E5%BF%85%E9%A0%88)

ルートの App コンポーネントや、Vue が提供する <transition> や <component> のようなビルトインコンポーネントを除き、コンポーネント名は常に複数単語とするべきです。

> これは、全ての HTML 要素は 1 単語となっているというこれまでの経緯から、既に存在する、そして将来定義される HTML 要素との衝突を防止します。

悪い例
```
export default {
  name: 'Todo',
  // ...
}
```

良い例
```
export default {
  name: 'TodoItem',
  // ...
}
```

### [基底コンポーネントの名前](https://jp.vuejs.org/v2/style-guide/index.html#%E5%9F%BA%E5%BA%95%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E5%90%8D%E5%89%8D-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

アプリケーション特有のスタイルやルールを適用する基底コンポーネント (またはプレゼンテーションコンポーネント: Presentation Components、ダムコンポーネント: Dumb Components、純粋コンポーネント: Pure Components とも) は、すべて Base 、 App 、V などの固有のプレフィックスで始まるべきです。

悪い例
```
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```
良い例
```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

### [密結合コンポーネントの名前](https://jp.vuejs.org/v2/style-guide/index.html#%E5%AF%86%E7%B5%90%E5%90%88%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E5%90%8D%E5%89%8D-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

親コンポーネントと密結合した子コンポーネントには、親コンポーネントの名前をプレフィックスとして含むべきです。

悪い例
```
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
```

良い例
```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

### [テンプレート内でのコンポーネント名の形式](https://jp.vuejs.org/v2/style-guide/index.html#%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E5%86%85%E3%81%A7%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%90%8D%E3%81%AE%E5%BD%A2%E5%BC%8F-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

ほとんどのプロジェクトでは、コンポーネント名は 単一ファイルコンポーネント と文字列テンプレートの中では常にパスカルケース(PascalCase)になるべきです。
しかし、 DOM テンプレートの中ではケバブケース(kebab-case)です。

悪い例
```
<!-- 単一ファイルコンポーネント、文字列テンプレートの中 -->
<mycomponent/>
<!-- 単一ファイルコンポーネント、文字列テンプレートの中 -->
<myComponent/>
<!-- DOM テンプレートの中 -->
<MyComponent></MyComponent>
```

良い例
```
<!-- 単一ファイルコンポーネント、文字列テンプレートの中 -->
<MyComponent/>
<!-- DOM テンプレートの中 -->
<my-component></my-component>
または

<!-- どこでも -->
<my-component></my-component>
```

### [完全な単語によるコンポーネント名](https://jp.vuejs.org/v2/style-guide/index.html#%E5%AE%8C%E5%85%A8%E3%81%AA%E5%8D%98%E8%AA%9E%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%90%8D-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

コンポーネント名には、略語よりも完全な単語を使うべきです。

> 長い名前によってもたらされる明快さは非常に貴重ですが、それをタイプする労力はエディタの自動補完によってとても小さくなります。特に、一般的でない略語は常に避けるべきです。

悪い例
```
components/
|- SdSettings.vue
|- UProfOpts.vue
```

良い例
```
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

### [プロパティ名の型式](https://jp.vuejs.org/v2/style-guide/index.html#%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E5%90%8D%E3%81%AE%E5%9E%8B%E5%BC%8F-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

プロパティ名は、定義の時は常にキャメルケース(camelCase)にするべきですが、テンプレートではケバブケース(kebab-case)にするべきです。

悪い例
```
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>
```

良い例
```
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```

## [クラス](https://typescript-jp.gitbook.io/deep-dive/styleguide#kurasu)

クラス名には PascalCaseを使います。
> 理由：これは実際には標準のJavaScriptではかなり一般的です。

悪い
```
class foo { }
```
良い
```
class Foo { }
```

## [メソッド](https://typescript-jp.gitbook.io/deep-dive/styleguide#to)

メソッドにはcamelCaseを使う

悪い
```
class Foo {
    BazHoge() { }
}
```

良い
```
class Foo {
    bazHoge() { }
}
```

## [インターフェース](https://typescript-jp.gitbook.io/deep-dive/styleguide#intfsu)

名前にはPascalCaseを使います。
> 理由：クラスに似ています
メンバにはcamelCaseを使います。
> 理由：クラスに似ています
プレフィックスにIをつけないでください
> 理由： 慣例的ではないため。lib.d.tsはIのない重要なインターフェース(例えば、Window、Documentなど)を定義します。

悪い
```
interface IFoo {
}
```

良い
```
interface Foo {
}
```

## [型](https://typescript-jp.gitbook.io/deep-dive/styleguide#taipu)

## [名前空間](https://typescript-jp.gitbook.io/deep-dive/styleguide#ming-qian-kong-jian)

## [Enum](https://typescript-jp.gitbook.io/deep-dive/styleguide#ming-qian-kong-jian)

// Enum使用推奨する？

## 引数

## 変数

## ローカル変数

# コーディングスタイル

## 全般

## フォーマット

## コメント

## コンポーネント

### [コンポーネントのデータ](https://jp.vuejs.org/v2/style-guide/index.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF-%E5%BF%85%E9%A0%88)

### [プロパティの定義](https://jp.vuejs.org/v2/style-guide/index.html#%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%AE%E5%AE%9A%E7%BE%A9-%E5%BF%85%E9%A0%88)

### [キー付きv-for](https://jp.vuejs.org/v2/style-guide/index.html#%E3%82%AD%E3%83%BC%E4%BB%98%E3%81%8D-v-for-%E5%BF%85%E9%A0%88)

### [v-forと一緒にv-ifを使うのを避ける](https://jp.vuejs.org/v2/style-guide/index.html#v-for-%E3%81%A8%E4%B8%80%E7%B7%92%E3%81%AB-v-if-%E3%82%92%E4%BD%BF%E3%81%86%E3%81%AE%E3%82%92%E9%81%BF%E3%81%91%E3%82%8B-%E5%BF%85%E9%A0%88)

### [コンポーネントスタイルのスコープ](https://jp.vuejs.org/v2/style-guide/index.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AE%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%97-%E5%BF%85%E9%A0%88)

### [コンポーネントのファイル](https://jp.vuejs.org/v2/style-guide/index.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

### [自己終了形式のコンポーネント](https://jp.vuejs.org/v2/style-guide/index.html#%E8%87%AA%E5%B7%B1%E7%B5%82%E4%BA%86%E5%BD%A2%E5%BC%8F%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

### [複数の属性を持つ要素](https://jp.vuejs.org/v2/style-guide/index.html#%E8%A4%87%E6%95%B0%E3%81%AE%E5%B1%9E%E6%80%A7%E3%82%92%E3%82%82%E3%81%A4%E8%A6%81%E7%B4%A0-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

### [テンプレート内での単純な式](https://jp.vuejs.org/v2/style-guide/index.html#%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E5%86%85%E3%81%A7%E3%81%AE%E5%8D%98%E7%B4%94%E3%81%AA%E5%BC%8F-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

### [単純な算出プロパティ](https://jp.vuejs.org/v2/style-guide/index.html#%E5%8D%98%E7%B4%94%E3%81%AA%E7%AE%97%E5%87%BA%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

### [引用符付きの属性値](https://jp.vuejs.org/v2/style-guide/index.html#%E5%BC%95%E7%94%A8%E7%AC%A6%E4%BB%98%E3%81%8D%E3%81%AE%E5%B1%9E%E6%80%A7%E5%80%A4-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

### [ディレクティブの短縮記法](https://jp.vuejs.org/v2/style-guide/index.html#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%81%AE%E7%9F%AD%E7%B8%AE%E8%A8%98%E6%B3%95-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

## 型

### [null vs undefined](https://typescript-jp.gitbook.io/deep-dive/styleguide#null-vs-undefined)

### [フォーマット](https://typescript-jp.gitbook.io/deep-dive/styleguide#fmatto)

### [配列](https://typescript-jp.gitbook.io/deep-dive/styleguide#pei-lie)

### [type vs interface](https://typescript-jp.gitbook.io/deep-dive/styleguide#type-vs-interface)

## [引用符](https://typescript-jp.gitbook.io/deep-dive/styleguide#yin-yong-fu)

## [スペース](https://typescript-jp.gitbook.io/deep-dive/styleguide#supsu)

## [セミコロン(文末)](https://typescript-jp.gitbook.io/deep-dive/styleguide#semikoron)

## クラス

## メソッド

## 引数

## 変数

## ローカル変数

## インスタンス変数

## 定数

## 継承

## インスタンス

## 制御構造

## 文字列操作

## 数値

## 日付

## 三項演算子

## 例外

## インポート
