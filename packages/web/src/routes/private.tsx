import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { Home } from '../pages/home'
import { ApolloProvider } from '../providers/apollo'

export const Private: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0()
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          scope: 'read:users',
        })
        setAccessToken(token)
      } catch (e) {
        console.log(e.message)
      }
    }
    getAccessToken()
  }, [getAccessTokenSilently, user])

  return (
    <ApolloProvider accessToken={accessToken}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </ApolloProvider>
  )
}
