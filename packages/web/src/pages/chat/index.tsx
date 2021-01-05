import React, { useCallback, useState, ChangeEvent } from 'react'
import { Header } from '../../components/header'
import { LoadingSpinner } from '../../components/loading-icon'
import { useParams } from 'react-router'
import {
  useMessageAddedSubscription,
  useMessageBoxMutation,
} from '../../generated/graphql'

export const Chat: React.FC = () => {
  const [content, setContent] = useState<string>('')
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useMessageAddedSubscription({
    variables: { chatId: Number(id) },
  })

  const [addMessage] = useMessageBoxMutation()

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }, [])

  const handleClick = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (content.length < 1) {
        return
      }
      const { data } = await addMessage({
        variables: {
          chatId: Number(id),
          content: content,
        },
      })

      if (data) {
        console.log(data)
        setContent('')
      } else {
        console.log('filed')
      }
    },
    [addMessage, content, id],
  )

  if (loading) {
    return <LoadingSpinner />
  }
  if (data) {
    console.log(data)
  }
  return (
    <>
      <Header pageTitle="Messages" />
      <main className="w-full p-4 mx-auto bg-primaryBg h-screen">
        {data &&
          data.message.map((item) => <div key={item.id}>{item.content}</div>)}
      </main>
      <form
        className="flex justify-between fixed w-full h-20 p-6 bg-borderColor bottom-0"
        onSubmit={handleClick}
      >
        <input
          type="text"
          className="border border-gray rounded-xl mr-2 w-4/5"
          onChange={handleChange}
          value={content}
        />
        <button
          className="w-1/5 rounded-xl bg-linkText text-white"
          type="submit"
        >
          送信
        </button>
      </form>
    </>
  )
}
