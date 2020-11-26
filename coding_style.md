# コーディングスタイル

## フォーマット

### インデントはスペース2文字

### { の後にステートメントを記述しない

悪い例
```
if (s == null) {return 0;}
```

良い例
```
if (s == null) {
    return 0;
}
```

### 1行に2つ以上のステートメントを記述しない

悪い例

```
} catch (Exception e) {
    log.error("Error", e);return null;
}
```

良い例
```
} catch (Exception e) {
    log.error("Error", e);
    return null;
}
```


### カンマの後には空白文字を

悪い例
```
process(x,y,z);
```

良い例
```
process(x, y, z);
```

### 代入演算子（ = , += , -= , …）の前後には空白文字を挿入する

悪い例
```
int a=x;
a+= 10;
```

良い例
```
int a = x;
a += 10;
```

### for 文内のセミコロンの後には空白文字を挿入する

悪い例
```
for (int i = 0;i < array.length ;i++) {
    //・・・
}
```

良い例
```
for (int i = 0; i < array.length; i++) {
    //・・・
}
```

### ++ や -- とオペランドの間には空白文字を入れない

悪い例
```
i ++;
```

良い例
```
i++;
```

### ビット演算子（ | 、 & 、 ^ 、 << 、 >> ）の前後には空白文字を挿入する

悪い例
```
console.log(a|b);
```

良い例
```
console.log(a | b);
```

### 論理演算子（ || 、&& ）の前後には空白文字を挿入する

悪い例
```
true||false&&false
```

良い例
```
true || false && false
```

### 関係演算子（ < 、 > 、 >= 、 <=、==、 != ）の前後には空白文字を挿入する

悪い例
```
a<=3
```

良い例
```
a <= 3
```

### 算術演算子（ ＋ 、 － 、 ＊ 、 / 、 % ）の前後には空白文字を挿入する

悪い例
```
const a = 1+2;
```

良い例
```
const a = 1 + 2;
```

### ifなどの条件式でbooleanの変数を比較しない

悪い例
```
if (hasStock == true)
```

良い例
```
if (hasStock)
```

## コメント

コメントテンプレート
```
/*
 * メソッドの説明
 *
 * @param 引数名　引数の内容
 * @return 返り値の内容
/*
```

### 不要なコメントは記載しない

- コードからすぐわかること
- 冗長なコメント
- 名前の説明
  - コメントではなくわかりやすい名前を付ける。
- 別システムで管理している内容
  - ソースコード管理システム、バグトラッキングシステムで管理している内容はソースコードにコメントで記載する必要はない。
    - コメントアウトされたコードソースコード管理システムで管理されている

## コンポーネント

### [キー付きv-for](https://jp.vuejs.org/v2/style-guide/index.html#%E3%82%AD%E3%83%BC%E4%BB%98%E3%81%8D-v-for-%E5%BF%85%E9%A0%88)

常に v-for に対しては key を使用してください。

悪い例
```
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

良い例
```
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

### [v-forと一緒にv-ifを使うのを避ける](https://jp.vuejs.org/v2/style-guide/index.html#v-for-%E3%81%A8%E4%B8%80%E7%B7%92%E3%81%AB-v-if-%E3%82%92%E4%BD%BF%E3%81%86%E3%81%AE%E3%82%92%E9%81%BF%E3%81%91%E3%82%8B-%E5%BF%85%E9%A0%88)

v-for と同じ要素に v-if を使わないでください。

こうしたくなってしまう2つの一般的なケースがあります:

- リスト内のアイテムをフィルタする(例: v-for="user in users" v-if="user.isActive")。このような場合は、フィルタリングされたリストを返却する算出プロパティに users を置き換えてください(例: activeUsers)。
- 非表示にする必要がある場合、リストを描画しないようにする(例: v-for="user in users" v-if="shouldShowUsers")。このような場合は、v-if をコンテナ要素(例: ul、ol)に移動してください。

悪い例
```
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

```
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

良い例
```
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

```
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

### [コンポーネントスタイルのスコープ](https://jp.vuejs.org/v2/style-guide/index.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AE%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%97-%E5%BF%85%E9%A0%88)

アプリケーションにとって、トップレベルの App コンポーネントとレイアウトコンポーネント内のスタイルはグローバルかもしれませんが、他のすべてのコンポーネントは常にスコープされているべきです。

悪い例
```
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>
```

良い例
```
<template>
  <button class="button button-close">X</button>
</template>

<!-- `scoped` を使用 -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>
```

```
<!-- CSS modules を使用 -->
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>
<template>
  <button class="c-Button c-Button--close">X</button>
</template>
```

```
<!-- BEM の慣例を使用 -->
<style>
.c-button {
  border: none;
  border-radius: 2px;
}

.c-button--close {
  background-color: red;
}
</style>
```

### [コンポーネントのファイル](https://jp.vuejs.org/v2/style-guide/index.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

ファイルを結合してくれるビルドシステムがあるときは必ず、各コンポーネントはそれぞれ別のファイルに書くべきです。

悪い例
```
Vue.component('TodoList', {
  // ...
})

Vue.component('TodoItem', {
  // ...
})
```

良い例
```
components/
|- TodoList.js
|- TodoItem.js
components/
|- TodoList.vue
|- TodoItem.vue
```

### [自己終了形式のコンポーネント](https://jp.vuejs.org/v2/style-guide/index.html#%E8%87%AA%E5%B7%B1%E7%B5%82%E4%BA%86%E5%BD%A2%E5%BC%8F%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

中身を持たないコンポーネントは、 単一ファイルコンポーネント 、文字列テンプレートの中では自己終了形式で書くべきです。

悪い例
```
<!-- 単一ファイルコンポーネント、文字列テンプレート、JSX の中 -->
<MyComponent></MyComponent>
```

良い例
```
<!-- 単一ファイルコンポーネント、文字列テンプレート、JSX の中 -->
<MyComponent/>
```

### [複数の属性を持つ要素](https://jp.vuejs.org/v2/style-guide/index.html#%E8%A4%87%E6%95%B0%E3%81%AE%E5%B1%9E%E6%80%A7%E3%82%92%E3%82%82%E3%81%A4%E8%A6%81%E7%B4%A0-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

複数の属性をもつ要素は、1 行に 1 要素ずつ、複数の行にわたって書くべきです。

悪い例
```
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<MyComponent foo="a" bar="b" baz="c"/>
```

良い例
```
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```

### [テンプレート内での単純な式](https://jp.vuejs.org/v2/style-guide/index.html#%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E5%86%85%E3%81%A7%E3%81%AE%E5%8D%98%E7%B4%94%E3%81%AA%E5%BC%8F-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

複雑な式は算出プロパティかメソッドにリファクタリングして、コンポーネントのテンプレートには単純な式だけを含むようにするべきです。

悪い例
```
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}
```

良い例
```
<!-- テンプレート内 -->
{{ normalizedFullName }}
// 複雑な式を算出プロパティに移動
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

### [単純な算出プロパティ](https://jp.vuejs.org/v2/style-guide/index.html#%E5%8D%98%E7%B4%94%E3%81%AA%E7%AE%97%E5%87%BA%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

複雑な算出プロパティは、できる限りたくさんの単純なプロパティに分割するべきです。

悪い例
```
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
```

良い例
```
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

### [引用符付きの属性値](https://jp.vuejs.org/v2/style-guide/index.html#%E5%BC%95%E7%94%A8%E7%AC%A6%E4%BB%98%E3%81%8D%E3%81%AE%E5%B1%9E%E6%80%A7%E5%80%A4-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

空ではない HTML 属性の値は常に引用符(シングルコーテーションかダブルコーテーション、 JS の中で使われていない方)でくくるべきです。

悪い例
```
<input type=text>
<AppSidebar :style={width:sidebarWidth+'px'}>
```

良い例
```
<input type="text">
<AppSidebar :style="{ width: sidebarWidth + 'px' }">
```

### [ディレクティブの短縮記法](https://jp.vuejs.org/v2/style-guide/index.html#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%81%AE%E7%9F%AD%E7%B8%AE%E8%A8%98%E6%B3%95-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8)

ディレクティブの短縮記法 (v-bind: に対する : 、 v-on: に対する @ 、 v-slot: に対する #)は、常に使うべきです。

悪い例
```
<input
  v-bind:value="newTodoText"
  :placeholder="newTodoInstructions"
>
```

```
<input
  v-on:input="onInput"
  @focus="onFocus"
>
```

```
<template v-slot:header>
  <h1>Here might be a page title</h1>
</template>

<template #footer>
  <p>Here's some contact info</p>
</template>
```

良い例
```
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>
```

```
<input
  @input="onInput"
  @focus="onFocus"
>
```

```
<template #header>
  <h1>Here might be a page title</h1>
</template>
<template #footer>
  <p>Here's some contact info</p>
</template>
```

## 型

### [配列](https://typescript-jp.gitbook.io/deep-dive/styleguide#pei-lie)

配列にfoos:Array<Foo>の代わりにfoos:Foo[]として配列にアノテーションをつけます。

### [type vs interface](https://typescript-jp.gitbook.io/deep-dive/styleguide#type-vs-interface)

ユニオン型や交差型が必要な場合にはtypeを使います：

```
type Foo = number | { someProperty: number }
```

extendsやimplementsをしたいときはinterfaceを使います。
```
interface Foo {
  foo: string;
}
interface FooBar extends Foo {
  bar: string;
}
class X implements FooBar {
  foo: string;
  bar: string;
}
```

そうでなければ、その日あなたを幸せにするものを使用してください。

## [引用符](https://typescript-jp.gitbook.io/deep-dive/styleguide#yin-yong-fu)

エスケープしない限り、シングルクォート(')を使用することをお勧めします。

ダブルクォートを使用できない場合は、バックティック(`)を使用してみてください。

## [スペース](https://typescript-jp.gitbook.io/deep-dive/styleguide#supsu)

2つのスペースを使います。タブではありません。

## [セミコロン(文末)](https://typescript-jp.gitbook.io/deep-dive/styleguide#semikoron)

セミコロンを使用してください。
