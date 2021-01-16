import React from 'react'
import { Header } from '../../components/header'
import { useAuth0 } from '@auth0/auth0-react'
import { LoadingSpinner } from '../../components/loading-icon'
import {
  useChatsListQuery,
  useUserUpdatedSubscription,
} from '../../generated/graphql'
import { ChatsList } from '../../components/chats-list'

export const Home: React.FC = () => {
  const { user } = useAuth0()
  const { data: userData, loading: userLoading } = useUserUpdatedSubscription()
  const { data: chatsData, loading: chatsLoading } = useChatsListQuery({
    variables: { userId: user.sub },
  })

  if (chatsLoading || userLoading) {
    return <LoadingSpinner />
  }

  console.log(userData)
  return (
    <>
      <Header pageTitle="チャット" />
      <main className="w-full p-4 mx-auto">
        <p className="font-bold text-sm text-linkText mb-2 pb-2 border-b border-borderColor hover:opacity-80">
          新規グループ
        </p>
        <div className="z-10 bg-white w-full fixed inset-0">
          <p className="font-bold">参加者を追加</p>
          <div>
            <button className="text-linkText">キャンセル</button>
          </div>
          {userData &&
            userData.users.map((list) => (
              <div key={list.id} className="flex hover:bg-tertiary mb-2">
                <img
                  className="inline object-cover w-12 h-12 mr-2 rounded-full"
                  src={list.picture ?? 'null'}
                  alt={`${list.username}の画像`}
                />
                <div className="w-full pb-2 border-b border-borderColor flex justify-between">
                  <div className="w-10/12">
                    <p className="font-bold">{list.username}</p>
                  </div>
                  <div className="w-2/12">
                    <p className="text-sm text-gray">まる</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
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
