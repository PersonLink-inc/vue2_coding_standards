# イベントの購読
v-on ディレクティブを使うことで、DOM イベントの購読、イベント発火時の JavaScript の実行が可能になります。

例:

```<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```
結果:


# メソッドイベントハンドラ
多くのイベントハンドラのロジックはより複雑になっていくので、v-on 属性の値に JavaScript 式を記述し続けるのは現実的ではありません。そのため、v-on は呼び出したいメソッドの名前も受け付けます。

例:
```<div id="example-2">
  <!-- `greet` は、あらかじめ定義したメソッドの名前 -->
  <button v-on:click="greet">Greet</button>
</div>
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // `methods` オブジェクトの下にメソッドを定義する
  methods: {
    greet: function (event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      alert('Hello ' + this.name + '!')
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
```

// JavaScript からメソッドを呼び出すこともできます
example2.greet() // => 'Hello Vue.js!'
結果:

# インラインメソッドハンドラ
メソッド名を直接指定する代わりに、インライン JavaScript 式でメソッドを指定することもできます:

```<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
```
結果:
時には、インラインステートメントハンドラでオリジナルの DOM イベントを参照したいこともあるでしょう。特別な $event 変数を使うことでメソッドに DOM イベントを渡すことができます:

```<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
// ...
methods: {
  warn: function (message, event) {
    // ネイティブイベントを参照しています
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```
# イベント修飾子
イベントハンドラ内での event.preventDefault() または event.stopPropagation() の呼び出しは、様々な場面で共通に必要になります。これらはメソッド内部で簡単に呼び出すことができますが、DOM イベントの込み入った処理をおこなうよりも、純粋なデータロジックだけになっている方がより良いでしょう。

この問題に対応するために、Vue は v-on のためにイベント修飾子(event modifiers)を提供しています。修飾子は、ドット(.)で表記されるディレクティブの接尾辞を思い返してください。

.stop
.prevent
.capture
.self
.once
.passive
<!-- クリックイベントの伝搬が止まります -->
<a v-on:click.stop="doThis"></a>

<!-- submit イベントによってページがリロードされません -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修飾子は繋げることができます -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 値を指定せず、修飾子だけ利用することもできます -->
<form v-on:submit.prevent></form>

<!-- イベントリスナーを追加するときにキャプチャモードで使います -->
<!-- 言い換えれば、内部要素を対象とするイベントは、その要素によって処理される前にここで処理されます -->
<div v-on:click.capture="doThis">...</div>

<!-- event.target が要素自身のときだけ、ハンドラが呼び出されます -->
<!-- 言い換えると子要素のときは呼び出されません -->
<div v-on:click.self="doThat">...</div>
修飾子を使用するとき、関連するコードが同じ順序で生成されるため注意してください。それゆえ、v-on:click.prevent.self を使用すると全てのクリックイベントを防ぐことはできますが、v-on:click.self.prevent は要素自身におけるクリックイベントを防ぐだけです。