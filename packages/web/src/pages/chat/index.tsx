import React, { useCallback } from 'react'
import { Header } from '../../components/header'
import { useAuth0 } from '@auth0/auth0-react'
import { LoadingSpinner } from '../../components/loading-icon'
import { useParams } from 'react-router'
import { useMessageAddedSubscription } from '../../generated/graphql'
import { Button } from '../../components/button'

export const Chat: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  console.log(id)
  const { data, loading } = useMessageAddedSubscription({
    variables: { chatId: Number(id) },
  })

  const handleClick = useCallback(() => {
    console.log('hello')
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }
  if (data) {
    console.log(data)
  }
  return (
    <>
      <Header pageTitle="Messages" />
      <main className="w-full p-4 mx-auto bg-primaryBg h-screen"></main>
      <form className="flex justify-between fixed w-full h-20 p-6 bg-borderColor bottom-0">
        <input
          type="text"
          className="border border-gray rounded-xl mr-2 w-4/5"
        />
        <button
          className="w-1/5 rounded-xl bg-linkText text-white"
          type="button"
          onClick={() => handleClick()}
        >
          送信
        </button>
      </form>
    </>
  )
}
