import React from 'react'

import { formatDate } from '../../utils/date'

type Props = {
  currentUser: string
  content: string
  created_at: string
  username: string
  senderId: string
  picture: string | null | undefined
}

export const Message: React.FC<Props> = ({
  currentUser,
  content,
  created_at,
  username,
  senderId,
  picture,
}) => {
  const { datetime } = formatDate(new Date(created_at), new Date())
  return currentUser === senderId ? (
    <div className="flex items-end justify-between bg-secondaryLight ml-auto mt-1 p-2 w-8/12 rounded-lg ">
      <p className="font-bold mr-4">{content}</p>
      <p className="text-xs text-gray">{datetime}</p>
    </div>
  ) : (
    <>
      <div className="flex items-end justify-between bg-white mr-auto mt-1 p-2 w-8/12 rounded-lg ">
        <p className="font-bold mr-4">{content}</p>
        <p className="text-xs text-gray">{datetime}</p>
      </div>
      <p>{username}</p>
    </>
  )
}
