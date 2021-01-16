import React from 'react'
import styles from './index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

type Props = {
  users: User[]
  isShow: boolean
}

type User = {
  id: string
  username: string
  picture?: string | null | undefined
  __typename?: 'users' | undefined
}

export const UsersList: React.FC<Props> = ({ users, isShow }) => {
  return (
    <div
      className={`z-10 bg-white w-full p-4 pt-12 fixed inset-0 ${
        isShow ? '' : 'transform -translate-y-full'
      }`}
    >
      <p className="font-bold text-center">参加者を追加</p>
      <div className="flex justify-between mt-4 pb-4 border-b border-borderColor">
        <button className="text-linkText">キャンセル</button>
        <button className="text-linkText">追加する</button>
      </div>
      <div className="mt-4">
        {users &&
          users.map((list) => (
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
                <div className="w-2/12 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-gray"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
