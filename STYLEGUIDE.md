# cssのコーディング規約
ココミテ案件で指摘いただいたutilityの使用を最小限に抑える流れならシングルクラスbem設計の方がいいと思うのでその流れに沿う形で進める
案件のcss規約とは少し違うところがあると思いますのでそこはご指摘いただけると幸いです

### css設計について

FROCSSの設計に基づくようにする
コンパイル後に一つのcssファイルとなるようにimportするファイル以外はファイル名の先頭に_(アンダーバー)をつける

ただしVue.jsではコンポーネントに分けて作るので、projectとlayoutに関してはvueの`<style scope lang="scss"></style>`内に移譲する

mixinがあればfundationに定義する

```
├── foundation(reset系とhtmlタグに当てるベーススタイル)
│   ├── _base.scss
│   └── _reset.scss
│   └── _mixin.scss
│   └── _variable.scss
├── layout(大きめのレイアウト全体のスタイル)
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _main.scss
│   └── _sidebar.scss
└── object(小さめのレイアウト全体のスタイル)
    ├── component(共通部品のスタイル)
    │   ├── _button.scss
    │   ├── _dialog.scss
    │   ├── _grid.scss
    │   └── _media.scss
    ├── project (ページ固有のスタイル)
    │   ├── _articles.scss
    │   ├── _comments.scss
    │   ├── _gallery.scss
    │   └── _profile.scss
    └── utility(スタイルを調整するなどの便利css)
        ├── _align.scss
        ├── _clearfix.scss
        ├── _margin.scss
        ├── _position.scss
        ├── _size.scss
        └── _text.scss
```

### プレフィクス
通常は以下のようにするがlayoutとprojectはvueコンポーネントのスタイルで定義するためプレフィクスなし
```
通常
layout     =l-
component  =c-
project    =p-
utility    =u-

案件では
layout     なし
component  =c-
project    なし
utility    =u-
```

### 命名規則

シングルクラスBEMとなるようにcssを当てていく
Block、Element、Modifier


### コーディング規約
本質とはずれるが、これをガチガチに守ろうとすると手が進まないので最初は自分の思うようにcssを書いていく方が良い。リファクタの観点で規約を書いていく

* color, font-size, font-weightなどは変数として定義する

※colorは増えて行きがちなので、先にどう対処するか決めておくと良い

* マルチクラスbemにしてはならない
```
NG
<button class="button button--bold">ボタン</button>

.button {
  widht: 150px;
  height: 30px
  &--bold {
    font-weight: bold;
  }
}

GOOD
<button class="button-bold">ボタン</button>

.button,
%button {
  widht: 150px;
  height: 30px
}
.button-bold {
  @extend %button;
  font-weight: bold;
}
```

* blockのないところにいきなりelementやmodifireを書いてはならない(議論の余地あり)
 ```
NG
<div class="flex-wrapper">
  <div class="article__list>リストのスタイル1</div>
  <div class="article__list>リストのスタイル2</div>
  <div class="article__list>リストのスタイル3</div>
</div>
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.article {
  &__list {
    margin-bottom: 10px;
  }
}

NG ※flex-wrapperをutilityディレクトリのu-flex-wrapperとして定義すればマルチクラスでもOK
<div class="flex-wrapper article">
  <div class="article__list>リストのスタイル1</div>
  <div class="article__list>リストのスタイル2</div>
  <div class="article__list>リストのスタイル3</div>
</div>
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.article {
  &__list {
    margin-bottom: 10px;
  }
}

GOOD
<div class="flex-wrapper">
  <div class="article">
    <div class="article__list>リストのスタイル1</div>
    <div class="article__list>リストのスタイル2</div>
    <div class="article__list>リストのスタイル3</div>
  </div>
</div>
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.article {
  &__list {
    margin-bottom: 10px;
  }
}


NG
<button class="button--bold">ボタン</button>

%button {
  widht: 150px;
  height: 30px
}
.button {
  @extend %button;
  &--bold {
    @extend %button;
    font-weight: bold;
  }
}

GOOD
<button class="button-bold">ボタン</button>

.button,
%button {
  widht: 150px;
  height: 30px
}
.button-bold {
  @extend %button;
  font-weight: bold;
}
```

* elementのネストは一つまで

htmlの構造とcssの構造は切り離して考える
```
NG
<nav class="nav">
  <ul class="nav__list>
    <li class="nav__list__item">
      <a class="nav__list__item__link" href="#">リスト1</a>
    </li>
    <li class="nav__list__item">
      <a class="nav__list__item__link" href="#">リスト2</a>
    </li>
    <li class="nav__list__item">
      <a class="nav__list__item__link" href="#">リスト3</a>
    </li>
  </ul>
</nav>

GOOD
<nav class="nav">
  <ul class="nav__list>
    <li class="nav__item">
      <a class="nav__link" href="#">リスト1</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#">リスト2</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#">リスト3</a>
    </li>
  </ul>
</nav>
```

* blockが大きくなったら小さく切る

```
NG
<nav class="nav">
  <ul class="nav__list>
    <li class="nav__item">
      <a class="nav__link" href="#">
        <div class="nav__item-wrap">
          <div class="nav__item-wrap-text">リスト１</div>
          <div class="nav__item-wrap-icon">×</div>
        </div>
      </a>
    </li>
    ...
  </ul>
</nav>

GOOD
<nav class="nav">
  <ul class="nav__list>
    <li class="list-item">
      <a class="list-item__link" href="#">
        <div class="list-wrap">
          <div class="item-wrap__text">リスト１</div>
          <div class="item-wrap__icon">×</div>
        </div>
      </a>
    </li>
    ...
  </ul>
</nav>
```

* blockとelementのマルチクラスは許す。(utilityクラスとの併用も許す。ただし極力使わないことを推進している)

```
NG
<div class="user-page flex-wrap">
  <div class="user-page__list">
    <!-- 略 -->
  </div>
  <div class="user-page__list">
    <!-- 略 -->
  </div>
  <div class="user-page__list">
    <!-- 略 -->
  </div>
</div>

GOOD
<div class="user-page u-flex-wrap">
  <div class="user-page__list">
    <!-- 略 -->
  </div>
  <div class="user-page__list">
    <!-- 略 -->
  </div>
  <div class="user-page__list">
    <!-- 略 -->
  </div>
</div>

GOOD
<div class="user-page">
  <div class="user-page__list friend-list">
    <!-- 略 -->
  </div>
  <div class="user-page__list image-list">
    <!-- 略 -->
  </div>
  <div class="user-page__list post-list">
    <!-- 略 -->
  </div>
</div>
```
