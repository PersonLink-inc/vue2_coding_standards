基本例
Vue コンポーネントの例を次に示します:

// button-counter と呼ばれる新しいコンポーネントを定義します
```Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```
コンポーネントは名前付きの再利用可能な Vue インスタンスです。この例の場合、<button-counter>です。このコンポーネントを new Vue で作成されたルート Vue インスタンス内でカスタム要素として使用することができます。

```<div id="components-demo">
  <button-counter></button-counter>
</div>
```
new Vue({ el: '#components-demo' })
コンポーネントは再利用可能な Vue インスタンスなので、data、computed、watch、methods、ライフサイクルフックなどの new Vue と同じオプションを受け入れます。唯一の例外は el のようなルート固有のオプションです。

コンポーネントの再利用
コンポーネントは必要なだけ何度でも再利用できます:


```<div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```
ボタンをクリックすると、それぞれが独自の count を保持することに注意してください。
コンポーネントを使用するたびに、新しいインスタンスが作成されるためです。