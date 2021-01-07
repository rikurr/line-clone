import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/date'

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
  message: Message | null
}

export const ChatsList: React.FC<Props> = ({ chat, user, message }) => {
  const time = message ? message.created_at : null
  const { datetime } = formatDate(time ? new Date(time) : null, new Date())

  return (
    <Link to={`chat/${chat.id}`}>
      <div className="flex hover:bg-tertiary mb-2">
        <img
          className="inline object-cover w-12 h-12 mr-2 rounded-full"
          src={chat.picture ?? user.picture!}
          alt="chat img"
        />
        <div className="w-full pb-2 border-b border-borderColor flex justify-between">
          <div>
            <p className="font-bold">{chat.name ?? user.username}</p>
            <p className="text-sm text-gray">
              {message ? message.content : '新規メッセージを作成する'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray">{datetime ?? ''}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
