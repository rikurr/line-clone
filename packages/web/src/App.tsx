import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'
import { Routes } from './routes/index'

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
    }),
    cache: new InMemoryCache(),
  })
}

function App() {
  const client = createApolloClient()
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
