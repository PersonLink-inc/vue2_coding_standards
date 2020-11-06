# フォルダ構成
.
├── README.md
├── public index.htmlという通常のhtmlファイルが入っているこれが大元になる
├── src 主に編集するフォルダ
│   ├── assets 静的ファイルの保管するフォルダ
│   ├── components ページ内の各要素を管理するフォルダ
│   ├── views 各ページ用のファイルを保管するフォルダ
│   ├── App.vue 全ページに共通して表示させたいコンポーネントなどを定義する
│   ├── main.ts 全ページに反映させたいtypescrptを書くためのフォルダ
│   ├── routes ルーティングの設定を行う際に使うフォルダ
│   └── stores Vuexが入る場所
├── test/unit 現状使わない
