# 説明
データバインディングに一般に求められることの 1 つは、要素のクラスリストとインラインスタイルを操作することです。それらはどちらも属性ですから、v-bind を使って扱うことができます。最終的な文字列を式で計算するだけです。しかしながら、文字列の連結に手を出すのは煩わしく、エラーのもとです。そのため、Vue は v-bind が class と style と一緒に使われるとき、特別な拡張機能を提供します。文字列だけではなく、式はオブジェクトまたは配列を返すことができます。

# 簡単に言うと・・・
例えばaタグのhref属性やimgタグのsrc属性なども動的に変更したい場合などに使う

# オブジェクト構文
v-bind:class にオブジェクトを渡すことでクラスを動的に切り替えることができます:

<div v-bind:class="{ active: isActive }"></div>
上記の構文は、active クラスの有無がデータプロパティ isActive の真偽性によって決まることを意味しています。

オブジェクトにさらにフィールドを持たせることで複数のクラスを切り替えることができます。加えて、v-bind:class ディレクティブはプレーンな class 属性と共存できます。つまり、次のようなテンプレートと:

<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
次のようなデータがあったとすると:

data: {
  isActive: true,
  hasError: false
}
このように描画されます:

<div class="static active"></div>
isActive もしくは hasError が変化するとき、クラスリストはそれに応じて更新されます。例えば、hasError が true になった場合、クラスリストは "static active text-danger" になります。

束縛されるオブジェクトはインラインでなくてもかまいません:

<div v-bind:class="classObject"></div>
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
これは同じ結果を描画します。オブジェクトを返す算出プロパティに束縛することもできます。これは一般的で強力なパターンです:

<div v-bind:class="classObject"></div>
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}

# 配列構文
v-bind:class に配列を渡してクラスのリストを適用することができます:

<div v-bind:class="[activeClass, errorClass]"></div>
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
これは次のように描画されます:

<div class="active text-danger"></div>
リスト内のクラスを条件に応じて切り替えたい場合は、三項演算子式を使って実現することができます:

<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
この場合 errorClass は常に適用されますが、activeClass クラスは isActive が真と評価されるときだけ適用されます。

しかしながら、これでは複数の条件つきクラスがあると少し冗長になってしまいます。そのため、配列構文の内部ではオブジェクト構文を使うこともできます:

<div v-bind:class="[{ active: isActive }, errorClass]"></div>
コンポーネントにおいて
このセクションでは、Vue のコンポーネントの知識を前提としています。いったんスキップして後で戻ってきても構いません。

カスタムコンポーネント上で class 属性を使用するとき、これらのクラスはコンポーネントの root 要素 に追加されます。この要素上に存在するクラスは、上書きされません。

例えば、このコンポーネントを宣言して:

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
使用するときにいくつかのクラスを追加したとします:

<my-component class="baz boo"></my-component>
以下の HTML が描画されます:

<p class="foo bar baz boo">Hi</p>
クラスバインディングに対しても同様です:

<my-component v-bind:class="{ active: isActive }"></my-component>
isActive が真と評価されるときは、以下の HTML が描画されます:

<p class="foo bar active">Hi</p>
インラインスタイルのバインディング

# オブジェクト構文
v-bind:style 向けのオブジェクト構文は非常に簡単です。JavaScript オブジェクトということを除けば、ほとんど CSS のように見えます。CSS のプロパティ名には、キャメルケース (camelCase) またはケバブケース (kebab-case: クォートとともに使うことになります) のどちらでも使用することができます:

<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}
テンプレートをクリーンにするために、直接 style オブジェクトに束縛するのは、よいアイディアです:

<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
ここでもまた、オブジェクト構文はしばしばオブジェクトを返す算出プロパティと併せて使用されます。

# 配列構文
v-bind:style 向けの配列構文は、同じ要素に複数のスタイルオブジェクトを適用することができます:

<div v-bind:style="[baseStyles, overridingStyles]"></div>

# 自動プリフィックス
v-bind:style でベンダー接頭辞を要求される CSS プロパティを使用するとき、例えば、transform においては、Vue.js は自動的に適切な接頭辞を検出し、適用されるスタイルに追加します。

