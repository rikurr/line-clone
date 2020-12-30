import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'
import { Routes } from './routes/index'

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:9695/v1/graphql',
    }),
    cache: new InMemoryCache(),
  })
}

function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain="line-clone-local.jp.auth0.com"
        clientId="6tVV9q1WIgMXVBgDBiPqApdMO8b5Yg5o"
        redirectUri={window.location.origin}
      >
        <Routes />
      </Auth0Provider>
    </BrowserRouter>
  )
}

export default App
