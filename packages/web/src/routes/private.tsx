import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { Home } from '../pages/home'

export const Private: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0()
  const [userMetadata, setUserMetadata] = useState(null)

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN

      console.log(domain)

      try {
        console.log('hh')
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        })


        console.log('hello');
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        const { user_metadata } = await metadataResponse.json()
        setUserMetadata(user_metadata)
      } catch (e) {
        console.log('error')
      }
    }
    getUserMetadata()
  }, [])

  console.log(userMetadata)
  console.log(user)
  return (
    <>
      {userMetadata ? (
        <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
      ) : (
        'No user metadata defined'
      )}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}
