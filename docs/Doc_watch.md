多くの場合では算出プロパティの方が適切ではありますが、カスタムウォッチャが必要な時もあるでしょう。データの変更に対して反応する、より汎用的な watch オプションを Vue が提供しているのはそのためです。データが変わるのに応じて非同期やコストの高い処理を実行したいときに最も便利です。

例:
```
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
<!-- ajax ライブラリの豊富なエコシステムや、汎用的なユーティリティ	-->
<!-- メソッドがたくさんあるので、Vue のコアはそれらを再発明せずに	-->
<!-- 小さく保たれています。この結果として、慣れ親しんでいるものだけを	-->
<!-- 使えるような自由さを Vue は持ち合わせています。			-->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // この関数は question が変わるごとに実行されます。
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce は特にコストの高い処理の実行を制御するための
    // lodash の関数です。この場合は、どのくらい頻繁に yesno.wtf/api
    // へのアクセスすべきかを制限するために、ユーザーの入力が完全に
    // 終わるのを待ってから ajax リクエストを実行しています。
    // _.debounce (とその親戚である _.throttle )  についての詳細は
    // https://lodash.com/docs#debounce を見てください。
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
</script>
```
この場合では、watch オプションを利用することで、非同期処理( API のアクセス)の実行や、処理をどのくらいの頻度で実行するかを制御したり、最終的な answer が取得できるまでは中間の状態にしておく、といったことが可能になっています。これらはいずれも算出プロパティでは実現できません。

watch オプションに加えて、命令的な vm.$watch API を利用することもできます。