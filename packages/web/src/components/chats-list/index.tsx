import React from 'react'

type User = {
  id: string
  username: string
  picture?: string | null
}

type Message = {
  id: number
  content: string
  created_at: string
}

type Chat = {
  id: number
  name?: string | null
  owner_id?: string | null
  picture?: string | null
}

type Props = {
  chat: Chat
  user: User
  message: Message
}

export type FormattedDate = {
  datetime: string
  isNew: boolean
}

export const formatDate = (d: Date, now: Date): FormattedDate => {
  const dtf = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
  const [
    { value: year },
    ,
    { value: month },
    ,
    { value: day },
    ,
    { value: hour },
    ,
    { value: minute },
  ] = dtf.formatToParts(d)
  const past = (now.getTime() - d.getTime()) / 1000
  const isNew = past < 24 * 60 * 60 * 7
  return {
    datetime: `${year}/${month}/${day} ${hour}:${minute}`,
    isNew,
  }
}

export const ChatsList: React.FC<Props> = ({ chat, user, message }) => {
  const { datetime, isNew } = formatDate(
    new Date(message.created_at),
    new Date(),
  )

  console.log(datetime, isNew)
  return (
    <>
      <div className="flex hover:bg-tertiary">
        <img
          className="inline object-cover w-12 h-12 mr-2 rounded-full"
          src={chat.picture ?? user.picture!}
          alt="chat img"
        />
        <div className="w-full pb-2 border-b border-borderColor flex justify-between">
          <div>
            <p className="font-bold">{chat.name ?? user.username}</p>
            <p className="text-sm text-gray">{message.content}</p>
          </div>
          <div>
            <p className="text-sm text-gray">18:11</p>
          </div>
        </div>
      </div>
    </>
  )
}
