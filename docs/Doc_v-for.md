テンプレート v-if と同様に、複数の要素のブロックをレンダリングするために、 v-for で <template> タグを使うこともできます。
例：
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>