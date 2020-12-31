import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { LoadingSpinner } from '../components/loading-spinner'

import { Private } from './private'
import { Public } from './public'

export const Routes: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, isLoading, error } = useAuth0()
  if (error) {
    return <div>Error</div>
  }
  return isLoading ? (
    <LoadingSpinner />
  ) : isAuthenticated ? (
    <Private />
  ) : (
    <Public onRedirect={loginWithRedirect} />
  )
}
