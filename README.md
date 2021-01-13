## React Hasura TypeScript環境構築

yarn install -W

## 環境変数

```
HASURA_GRAPHQL_ADMIN_SECRET=
HASURA_GRAPHQL_JWT_SECRET=
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_AUDIENCE=
REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET=
REACT_APP_HASURA_GRAPHQL_ENDPOINT=
```
## ngrok使用
```
  ./ngrok http -host-header="0.0.0.0:8080" 8080
```

## フロントエンドのローカル環境
yarn web start

## ローカルのHasura起動
yarn hasura start

## Hasuraコンソール
yarn hasura console 


## フロントエンドテスト
yarn web test
## GraphQL codegen生成
yarn web codegen

### Stack
- Apollo GraphQL
- Typscript
- Minireset.css
- Hasura
- Css module
- Eslint, Prettier
- Jest
- Story Book
