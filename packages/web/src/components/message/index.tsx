import React from 'react'
import styles from './index.module.css'

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
    <div
      className={`bg-secondaryLight max-w-3/4 clear-both float-right mt-1 font-bold p-2 rounded-lg shadow-sm relative ${styles.messageRight}`}
    >
      <span>{content}</span>
      <span className="text-xs pl-2 inline-block font-normal relative -bottom-2 float-right text-gray">
        {datetime}
      </span>
    </div>
  ) : (
    <>
      <div
        className={`bg-white max-w-3/4 clear-both font-bold float-left mt-1 p-2 rounded-lg shadow-sm relative ${styles.messageLeft}`}
      >
        <span>{content}</span>
        <span className="text-xs pl-2 inline-block font-normal relative -bottom-2 float-right text-gray">
          {datetime}
        </span>
      </div>
    </>
  )
}
