v-if ディレクティブは、ブロックを条件に応じて描画したい場合に使用されます。ブロックは、ディレクティブの式が真を返す場合のみ描画されます。

<h1 v-if="awesome">Vue is awesome!</h1>
これは、v-else で “else ブロック” を追加することも可能です:

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
テンプレートでの v-if による条件グループ
v-if はディレクティブなので、単一の要素に付加する必要があります。しかし、1 要素よりも多くの要素と切り替えたい場合はどうでしょうか？このケースでは、非表示ラッパー (wrapper) として提供される、<template> 要素で v-if を使用できます。最終的に描画される結果は、<template> 要素は含まれません。

```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```
v-else
v-if に対して “else block” を示すために、v-else ディレクティブを使用できます:

```
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```
v-else 要素は、v-if または v-else-if 要素の直後になければなりません。それ以外の場合は認識されません。

v-else-if

v-else-if は、名前が示唆するように、v-if の “else if block” として機能します。また、複数回連結することもできます:

```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
v-else と同様に、v-else-if 要素は v-if 要素またはv-else-if 要素の直後になければなりません。

# key による再利用可能な要素の制御
Vue は要素を可能な限り効率的に描画しようとしますが、スクラッチから描画する代わりにそれら要素を再利用することがよくあります。Vue を非常に速くするのに役立つ以外にも、これにはいくつかの便利な利点があります。たとえば、ユーザーが複数のログインタイプを切り替えることを許可する場合は、次のようにします:

```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```
上記のコードで loginType を切り替えても、ユーザーが既に入力した内容は消去されません。両方のテンプレートが同じ要素を使用するので、<input> は置き換えられず、 placeholder だけが置き換えられます。

input にテキストを入力して、トグルボタンを押して自分で確認してください：

しかしこれは必ずしも望ましいことでないかもしれないので、Vue は”この 2 つの要素は完全に別個のもので、再利用しないでください” と伝える方法を提供します。
それは、一意の値を持つ key 属性を追加するだけです:

```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
トグルするたびにこれらの input が最初から描画されます。

<label> 要素は、key 属性を持たないため、依然として効率的に再利用されていることに注意してください

一般的に、v-if はより高い切り替えコストを持っているのに対して、 v-show はより高い初期描画コストを持っています。
そのため、とても頻繁に何かを切り替える必要があれば v-show を選び、条件が実行時に変更することがほとんどない場合は、v-if を選びます。

v-if と v-for
v-if と v-for を同時に利用することは 推奨されません。

v-if といっしょに使用されるとき、v-for は v-if より優先度が高くなります。
