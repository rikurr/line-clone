import React, { ReactNode } from 'react'

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider as ApolloProviderOrigin,
  split,
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

type Props = {
  children: ReactNode
  accessToken?: string
}

const createApolloClient = (accessToken?: string) => {
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {}

  const wsUri = process.env.REACT_APP_HASURA_GRAPHQL_ENDPOINT?.replace(
    /^http?/,
    'ws',
  )

  const wsLink = new WebSocketLink({
    uri: wsUri!,
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  })

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_HASURA_GRAPHQL_ENDPOINT,
    headers,
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink,
  )

  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  })
}

export const ApolloProvider = ({ children, accessToken }: Props) => (
  <ApolloProviderOrigin client={createApolloClient(accessToken)}>
    {children}
  </ApolloProviderOrigin>
)
