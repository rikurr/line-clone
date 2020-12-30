import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Private } from './private'
import { Public } from './public'

export const Routes: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  return isAuthenticated ? (
    <Private />
  ) : (
    <Public onRedirect={loginWithRedirect} />
  )
}
