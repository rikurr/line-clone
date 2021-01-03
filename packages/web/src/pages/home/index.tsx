import React from 'react'
import { Header } from '../../components/header'
import { useAuth0 } from '@auth0/auth0-react'
import { LoadingSpinner } from '../../components/loading-icon'
import { useChatsListQuery } from '../../generated/graphql'

export const Home: React.FC = () => {
  const { user } = useAuth0()
  const { data, loading, error } = useChatsListQuery({
    variables: { userId: user.sub },
  })

  if (loading) {
    return <LoadingSpinner />
  }

  if (!data || error) {
    return <div>{error?.message ?? 'error'}</div>
  }

  console.log(data)

  return (
    <>
      <Header pageTitle="Home" />
      <main className="w-full p-4 mx-auto">
        {data &&
          data.chat.map((list) => (
            <div key={list.id} className="flex hover:bg-tertiary">
              <img
                className="inline object-cover w-12 h-12 mr-2 rounded-full"
                src={list.picture ?? list.users[0].user.picture!}
                alt="chat img"
              />
              <div className="w-full pb-2 border-b border-tertiary flex justify-between">
                <div>
                  <p className="font-bold">
                    {list.name ?? list.users[0].user.username}
                  </p>
                  <p className="text-sm text-secondaryText">
                    {list.messages[0].content}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-secondaryText">18:11</p>
                </div>
              </div>
            </div>
          ))}
      </main>
    </>
  )
}
