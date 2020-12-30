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
        domain={process.env.REACT_APP_AUTH0_DOMAIN!}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
        redirectUri={window.location.origin}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE!}
        scope="read:current_user update:current_user_metadata"
      >
        <Routes />
      </Auth0Provider>
    </BrowserRouter>
  )
}

export default App
