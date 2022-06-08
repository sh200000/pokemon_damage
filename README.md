# アプリケーション名
 ポケモンダメージ計算ツール

# アプリケーション概要
ゲームポケットモンスターシリーズにおけるダメージの計算をすることができる。

# URL
https://pokemon-damage.herokuapp.com/

# 利用方法
- 攻撃側のポケモン名を入力する※<br>
- 防御側のポケモン名を入力する※<br>
- 攻撃側の技を選択する<br>
- 変更したい数値や条件があれば変更する<br>
※現在登録してあるポケモンは「ポリゴン2」、「コオリッポ（アイス）」、「コオリッポ（ナイス）」、「ドラパルト」、「カイオーガ」、「パルシェン」、「サニゴーン」、「ナマコブシ」、「ミミッキュ」、「カビゴン」、「ガマゲロゲ」、「エルフーン」だけなので、この中のどれかしか入力できない。
今後全てのポケモンを登録する予定。

# アプリケーションを作成した背景
もともとこのアプリと同じようなアプリを自分で使用していて、そこからプログラミングに興味を持つようになった。内部でどのような処理をしているか疑問に思っていたため、今回自分自身でアプリを作り内部の処理を勉強したいと思った。<br>
また、条件を変更した瞬間に計算結果が出るようにし、既存のアプリより使用者が使いやすいアプリを目指し作成した。

# 洗い出した要件
https://docs.google.com/spreadsheets/d/1LZxAMP9YC2sf00qLGA5-KvHt0LVZYYqOG0cJtntiBXk/edit#gid=982722306

# 実装した機能についての画像やGIFおよびその説明
- 攻撃側のポケモンを入力すると攻撃側ポケモンの情報が表示される動画
[![Image from Gyazo](https://i.gyazo.com/57d24e02a9ad7f4ec5d5ffcfa026be5a.gif)](https://gyazo.com/57d24e02a9ad7f4ec5d5ffcfa026be5a)
- 防御側のポケモンを入力すると防御側ポケモンの情報が表示される動画
[![Image from Gyazo](https://i.gyazo.com/9c1489aae171c27df25b5a251d4ca1bf.gif)](https://gyazo.com/9c1489aae171c27df25b5a251d4ca1bf)
- 技のぶつり、とくしゅを選択すると対応するステータスが計算し直される動画
[![Image from Gyazo](https://i.gyazo.com/8b0429bf989c7155edc8c761fe6fcaeb.gif)](https://gyazo.com/8b0429bf989c7155edc8c761fe6fcaeb)
- 入力欄を変更するとダメージ計算結果が変更される動画1
[![Image from Gyazo](https://i.gyazo.com/20e43a4fd0e89b77a07fa8ad72702203.gif)](https://gyazo.com/20e43a4fd0e89b77a07fa8ad72702203)
- 入力欄を変更するとダメージ計算結果が変更される動画2
[![Image from Gyazo](https://i.gyazo.com/bc08ee0347eca6ecad433c1aab3b9339.gif)](https://gyazo.com/bc08ee0347eca6ecad433c1aab3b9339)

# 実装予定の機能
- ポケモン名を入力すると入力してある文字列を参照して候補のポケモン名を表示する機能<br>
- ユーザー登録しよく使うポケモンをお気に入り登録できる機能

# データベース設計
（実際にはデータベースではなくアクティブハッシュを使用している）
[![Image from Gyazo](https://i.gyazo.com/c1a6cd5be294f9c08732ae1cf0cd3aac.png)](https://gyazo.com/c1a6cd5be294f9c08732ae1cf0cd3aac)

# 開発環境
- フロントエンド<br>
- バックエンド<br>
- テキストエディタ<br>
- タスク管理<br>


# ローカルでの動作方法
以下のコマンドを順に実行<br>
% git clone https://github.com/sh200000/pokemon_damage.git<br>
% cd pokemon_damage<br>
% bundle install<br>
% yarn install


# 工夫したポイント
- ダメージ計算結果を数字だけでなくゲージを使用して分かりやすくした。<br>
- 条件を変更すると変更した瞬間にダメージ計算結果とダメージのゲージが変化するようにした。

