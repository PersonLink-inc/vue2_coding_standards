computed
型: { [key: string]: Function | { get: Function, set: Function } }

詳細:

Vue インスタンスに組み込まれる算出プロパティ (Computed property) です。すべての getter や setter は、自動的に Vue インスタンスに束縛された this コンテキストを持ちます。

算出プロパティでアロー関数を使用する場合は、this はコンポーネントインスタンスになりませんが、それでも関数の第 1 引数としてアクセスすることができます:

computed: {
  aDouble: vm => vm.a * 2
}
算出プロパティはキャッシュされ、そしてリアクティブ依存が変更されたときにだけ再算出します。ある依存関係がインスタンスのスコープ外の(つまりリアクティブではない)場合、算出プロパティは更新されないことに注意してください。

例:
```
var vm = new Vue({
  data: { a: 1 },
  computed: {
    // get のみ。必要なのは関数一つだけ
    aDouble: function () {
      return this.a * 2
    },
    // get と set 両方
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  }
})
vm.aPlus   // => 2
vm.aPlus = 3
vm.a       // => 2
vm.aDouble // => 4
```
参照: 算出プロパティ