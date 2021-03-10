# 命名規則

## ファイル命名

### TypeScript
> https://typescript-jp.gitbook.io/deep-dive/styleguide#fairu

モデルやメソッド名をファイル名に利用する場合は __`camelCase`__ を、
クラス名をファイル名に利用する場合は __`PascalCase`__ を使ってファイルに名前を付けましょう。

良い例
```
- AuthStore.ts
- StorageUtils.ts
- addItem.ts
- user.ts
```

### コンポーネント(Vue)
> https://jp.vuejs.org/v2/style-guide/index.html#%E5%8D%98%E4%B8%80%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E3%81%AE%E5%BD%A2%E5%BC%8F-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8

__`PascalCase`__ を使ってファイルに名前を付けましょう。

良い例
```
- MyComponent.vue
```


## TypeScript

### クラス
> https://typescript-jp.gitbook.io/deep-dive/styleguide#kurasu

クラス名には __`PascalCase`__ を使いましょう。

悪い例
```
class foo { }
```
良い例
```
class Foo { }
```

### メソッド
> https://typescript-jp.gitbook.io/deep-dive/styleguide#to

メソッド名には __`camelCase`__ を使いましょう。

悪い例
```
class Foo {
  BazHoge() { }
}
```

良い例
```
class Foo {
  bazHoge() { }
}
```

メソッドの引数は __`camelCase`__ を使いましょう。
型をつけましょう。

悪い例
```
hoge(File) { }
```

良い例
```
hoge(file: File) { }
```

### インターフェース
> https://typescript-jp.gitbook.io/deep-dive/styleguide#intfsu

名前には __`PascalCase`__ を使いましょう。

メンバには __`camelCase`__ を使いましょう。

プレフィックスにIをつけないでください。

悪い例
```
interface IFoo {
  hoge-huga: number
}
```

良い例
```
interface Foo {
  hogeHuga: number
}
```

### タイプ
> https://typescript-jp.gitbook.io/deep-dive/styleguide#taipu

名前には __`PascalCase`__ を使いましょう。

メンバには __`camelCase`__ を使いましょう。

悪い例
```
type foo = {
  hoge-huga: number
}
```

良い例
```
type Foo = {
  hogeHuga: number
}
```


## コンポーネント(Vue)

### 複数単語コンポーネント名
> https://jp.vuejs.org/v2/style-guide/index.html#%E8%A4%87%E6%95%B0%E5%8D%98%E8%AA%9E%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%90%8D-%E5%BF%85%E9%A0%88

ルートのAppコンポーネントや、Vue が提供する `<transition>` や `<component>` のようなビルトインコンポーネントを除き、コンポーネント名は常に複数単語としましょう。

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

### 基底コンポーネントの名前
> https://jp.vuejs.org/v2/style-guide/index.html#%E5%9F%BA%E5%BA%95%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E5%90%8D%E5%89%8D-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8

アプリケーション特有のスタイルやルールを適用する基底コンポーネントは、すべて __`Base`__ のプレフィックスで始めましょう。

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

### 密結合コンポーネントの名前
> https://jp.vuejs.org/v2/style-guide/index.html#%E5%AF%86%E7%B5%90%E5%90%88%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E5%90%8D%E5%89%8D-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8

親コンポーネントと密結合した子コンポーネントには、親コンポーネントの名前をプレフィックスとして含みましょう。

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

### テンプレート内でのコンポーネント名の形式
> https://jp.vuejs.org/v2/style-guide/index.html#%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E5%86%85%E3%81%A7%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%90%8D%E3%81%AE%E5%BD%A2%E5%BC%8F-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8

ほとんどのプロジェクトでは、コンポーネント名は 単一ファイルコンポーネントと文字列テンプレートの中では常に __`PascalCase`__ を利用しましょう。

悪い例
```
<!-- 単一ファイルコンポーネント、文字列テンプレートの中 -->
<mycomponent/>
<!-- 単一ファイルコンポーネント、文字列テンプレートの中 -->
<myComponent/>
```

良い例
```
<!-- 単一ファイルコンポーネント、文字列テンプレートの中 -->
<MyComponent/>
```

### 完全な単語によるコンポーネント名
> https://jp.vuejs.org/v2/style-guide/index.html#%E5%AE%8C%E5%85%A8%E3%81%AA%E5%8D%98%E8%AA%9E%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%90%8D-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8

コンポーネント名には、略語よりも完全な単語を使いましょう。

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

### プロパティ名の型式
> https://jp.vuejs.org/v2/style-guide/index.html#%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E5%90%8D%E3%81%AE%E5%9E%8B%E5%BC%8F-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8

プロパティ名は、定義の時は常に __`camelCase`__ を利用します。

テンプレートではケバブケース __`kebab-case`__ を利用します。

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
