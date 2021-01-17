import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

type Props = {
  pageTitle?: string
  picture?: string
}

export const Header: React.FC<Props> = ({
  pageTitle = 'React Hasura App',
  picture,
}) => {
  const { logout } = useAuth0()
  const [isBack, setBack] = useState<boolean>(false)
  const history = useHistory()

  useEffect(() => {
    history.location.pathname.length !== 1 ? setBack(true) : setBack(false)
  }, [history, isBack])

  console.log(history.location.pathname.length !== 1 ? 'chat' : 'hello')

  return (
    <header className="px-4 h-16 flex items-center bg-white border-b border-gray">
      {isBack ? (
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-linkText mr-6"
          size="lg"
          onClick={() => history.goBack()}
        />
      ) : null}
      {picture && (
        <img
          className="inline object-cover w-10 h-10 mr-2 rounded-full"
          src={picture}
          alt={pageTitle}
        />
      )}
      <h2 className="text-black text-xl font-bold ">{pageTitle}</h2>
      {/* <button
        className="bg-primary hover:opacity-80 text-white py-2 px-4 rounded"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        ログアウト
      </button> */}
    </header>
  )
}
