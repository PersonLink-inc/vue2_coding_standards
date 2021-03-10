# Vue/CSSのコーディング規約

## vueにおいてのCSS設計について
[Scoped CSS](https://vue-loader-v14.vuejs.org/ja/features/scoped-css.html) を用いてコーディングを行う。

## 命名規則
- 命名規則は、[BEM](http://getbem.com/naming/) をベースとして実装する。
- 命名には __`kebab-case`__ を用いる。

```css
/* block */
.component-name {}

/* block--modifier */
.component-name._modifier {}

/* block__element */
.component-name__element {}

/* block__element--modifier */
.component-name__element._modifier {}
```

`modifier`には`._is-active`のように外観や動作、または状態を持たせる。


## コーディング規約
- 要素セレクタを使用しない。
  ```scss
  /* NG */
  a.block__element {
    &._is-active {
    }
  }

  /* OK */
  .block__element {
    &._is-active {
    }
  }
  ```

- 詳細度を不用意に上げない。
  （入れ子で指定せず、クラスを用いて実装する。）
  ```scss
  /* NG */
  .block {
    &__element {
      & > a {
        span {
        }
      }
    }
  }
  ```

- マルチクラスBEMにしてはならない。
  （blockとelementのマルチクラスは許容する。）

- elementのネストは一つまでとする。

- 余白(margin)のコントロールは親コンポーネントから基本行う。
  （UIコンポーネントは全体のあらゆるところで用いられる可能性がある為、コンポーネント自身に余白を設けるのは非推奨です。）


## 定義ファイルについて
変数やmixinなどは、サイト全体で利用する変数(_variables.scss)やmixin(_mixins.scss)を作成します。

作成したファイルは、個々のVueコンポーネントからも参照できるようにしておきます。
vue-cliを用いている場合、`vue.config.js`の設定を以下のようにすることで全てのVueファイルから変数やmixinを参照することができます。

```js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/_variables.scss";
          @import "./src/assets/scss/_mixins.scss";
        `
      }
    }
  }
}
```