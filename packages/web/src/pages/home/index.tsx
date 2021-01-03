import React from 'react'
import { Header } from '../../components/header'
import { useAuth0 } from '@auth0/auth0-react'
import { useGetUserQuery } from '../../types/graphql'
import { LoadingSpinner } from '../../components/loading-icon'

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
      <main className="w-full p-4 mx-auto">
        <h1>ログイン完了</h1>
        <button
          className="bg-primary hover:opacity-80 text-textPrimary font-bold py-2 px-4 rounded"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          ログアウト
        </button>
      </main>
    </>
  )
}
