# api-passport-jwt-typescript

## 概要

typescript と passport-jwt で作った認証 API サーバーです．

詳しくは[こちらの記事](https://msksgm.hatenablog.com/entry/2021/07/02/075738)を参照．

## 実行方法

### package の install

```sh
git clone https://github.com/Msksgm/api-passport-jwt-typescript.git
cd api-passport-jwt-typescript
yarn
```

### 環境変数を読み込み

.env ファイルを作成

```text .env
JWT_SECRET="secret-jwt-cat"
```

環境変数を読み込む

```
export $(cat .env | grep -v ^# | xargs)
```

### 実行

```
yarn start
```
