import React, { useCallback, useState, ChangeEvent } from 'react'
import { Header } from '../../components/header'
import { LoadingSpinner } from '../../components/loading-icon'
import { useParams } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import {
  useMessageAddedSubscription,
  useMessageBoxMutation,
} from '../../generated/graphql'
import { Message } from '../../components/message'
import { Button } from '../../components/button'
import { InputText } from '../../components/input-text/index'

export const Chat: React.FC = () => {
  const [content, setContent] = useState<string>('')
  const { id } = useParams<{ id: string }>()
  const { user } = useAuth0()
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
  return (
    <>
      <Header pageTitle="Messages" />
      <main className="w-full p-4 mx-auto bg-primaryBg h-screen">
        {data &&
          data.message.map((item) => (
            <Message
              key={item.id}
              content={item.content}
              senderId={item.sender.id}
              username={item.sender.username}
              created_at={item.created_at}
              currentUser={user.sub}
              picture={item.sender.picture}
            />
          ))}
      </main>
      <form
        className="flex justify-between fixed w-full h-20 p-6 bg-borderColor bottom-0"
        onSubmit={handleClick}
      >
        <InputText type="text" onChange={handleChange} value={content} />
        <Button type="submit">送信</Button>
      </form>
    </>
  )
}
