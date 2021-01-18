import React, { useState, useCallback } from 'react'
import styles from './index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {
  users: User[]
  isShow: boolean
  handleShow: () => void
  handleClick: (userId: string, currentUserId: string) => void
  currentUserId: string
}

type User = {
  id: string
  username: string
  picture?: string | null | undefined
  __typename?: 'users' | undefined
}

export const UsersList: React.FC<Props> = ({
  users,
  isShow,
  handleShow,
  handleClick,
  currentUserId,
}) => {
  const [isSelect, setSelect] = useState<string>('')

  const handleSelect = useCallback((userId) => {
    setSelect(userId)
  }, [])
  return (
    <div
      className={`z-10 bg-white w-full p-4 pt-12 fixed inset-0 transition-all duration-300 delay-100 ${
        isShow ? 'transform translate-y-0' : 'transform translate-y-full'
      }`}
    >
      <p className="font-bold text-center">ユーザーを選択</p>
      <div className="flex justify-between mt-4 pb-4 border-b border-borderColor">
        <button
          className="font-bold text-sm text-linkText"
          onClick={handleShow}
          type="button"
        >
          キャンセル
        </button>
        <button
          className="font-bold text-sm text-linkText"
          type="button"
          onClick={() => handleClick(isSelect, currentUserId)}
        >
          作成する
        </button>
      </div>
      <div className="mt-4">
        {users &&
          users.map((list) => (
            <div
              key={list.id}
              className="flex hover:bg-tertiary mb-2"
              onClick={() => handleSelect(list.id)}
            >
              <img
                className="inline object-cover w-10 h-10 mr-2 mt-2 mb-2 rounded-full"
                src={list.picture ?? 'null'}
                alt={`${list.username}の画像`}
              />
              <div className="w-full pb-2 border-b border-borderColor flex justify-between">
                <div className="w-10/12">
                  <p className="font-bold">{list.username}</p>
                </div>
                <div className="w-2/12 flex items-center justify-center">
                  {isSelect === list.id ? (
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-linkText"
                      size="lg"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-gray"
                      size="lg"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
