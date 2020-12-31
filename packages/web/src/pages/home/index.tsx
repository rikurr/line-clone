import React from 'react'
import { Header } from '../../components/header'
import { useAuth0 } from '@auth0/auth0-react'
import { useGetUserQuery } from '../../types/graphql'
import { LoadingSpinner } from '../../components/loading-spinner'

export const Home: React.FC = () => {
  const { logout, user } = useAuth0()
  const { data, loading, error } = useGetUserQuery({
    variables: { id: user.sub },
  })

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <div>error</div>
  }

  console.log(data)

  return (
    <>
      <Header pageTitle="Home" />
      <h1>ログイン完了</h1>

      <button onClick={() => logout({ returnTo: window.location.origin })}>
        ログアウト
      </button>
    </>
  )
}
