import React from 'react'
import styles from './index.module.css'

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

export const ChatsList: React.FC<Props> = ({ chat, user, message }) => {
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
