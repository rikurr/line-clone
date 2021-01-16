import React, { useState, useCallback } from 'react'
import { Header } from '../../components/header'
import { useAuth0 } from '@auth0/auth0-react'
import { LoadingSpinner } from '../../components/loading-icon'
import {
  useChatsListQuery,
  useUserUpdatedSubscription,
} from '../../generated/graphql'
import { ChatsList } from '../../components/chats-list'
import { UsersList } from '../../components/users-list'

export const Home: React.FC = () => {
  const { user } = useAuth0()
  const [isShow, setIsShow] = useState<boolean>(false)
  const { data: userData, loading: userLoading } = useUserUpdatedSubscription()
  const { data: chatsData, loading: chatsLoading } = useChatsListQuery({
    variables: { userId: user.sub },
  })

  const handleShow = useCallback(() => {
    setIsShow((prev) => !prev)
  }, [])

  if (chatsLoading || userLoading) {
    return <LoadingSpinner />
  }

  console.log(userData)
  return (
    <>
      <Header pageTitle="チャット" />
      <main className="w-full p-4 mx-auto">
        <div className="mb-2 pb-2 border-b border-borderColor">
          <button
            className="font-bold text-sm text-linkText hover:opacity-80"
            onClick={handleShow}
            type="button"
          >
            新規グループ
          </button>
        </div>
        {userData && (
          <UsersList
            users={userData.users}
            isShow={isShow}
            handleShow={handleShow}
          />
        )}
        {chatsData &&
          chatsData.chat.map((list) =>
            list.messages[0] ? (
              <ChatsList
                key={list.id}
                chat={{ name: list.name, picture: list.picture, id: list.id }}
                user={{
                  id: list.users[0].user.id,
                  username: list.users[0].user.username,
                  picture: list.users[0].user.picture,
                }}
                message={{
                  id: list.messages[0].id,
                  content: list.messages[0].content,
                  created_at: list.messages[0].created_at,
                }}
              />
            ) : (
              <ChatsList
                key={list.id}
                chat={{ name: list.name, picture: list.picture, id: list.id }}
                user={{
                  id: list.users[0].user.id,
                  username: list.users[0].user.username,
                  picture: list.users[0].user.picture,
                }}
                message={null}
              />
            ),
          )}
      </main>
    </>
  )
}
