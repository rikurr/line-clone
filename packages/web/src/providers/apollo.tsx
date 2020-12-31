import React, { ReactNode } from 'react'

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider as ApolloProviderOrigin,
} from '@apollo/client'

type Props = {
  children: ReactNode
  accessToken?: string
}

const createApolloClient = (accessToken?: string) => {
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_HASURA_GRAPHQL_ENDPOINT,
      headers,
    }),
    cache: new InMemoryCache(),
  })
}

export const ApolloProvider = ({ children, accessToken }: Props) => (
  <ApolloProviderOrigin client={createApolloClient(accessToken)}>
    {children}
  </ApolloProviderOrigin>
)
