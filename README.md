## React Hasura TypeScript環境構築

yarn install -W

##　環境変数

HASURA_GRAPHQL_ADMIN_SECRET
HASURA_GRAPHQL_JWT_SECRET
REACT_APP_AUTH0_DOMAIN
REACT_APP_AUTH0_CLIENT_ID

## フロントエンドのローカル環境
yarn web dev

## ローカルのHasura起動
yarn hasura start

## Hasuraコンソール
yarn hasura console 


## フロントエンドテスト
yarn web test
## フロントエンドcodegen生成
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
