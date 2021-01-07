import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router'

type Props = {
  pageTitle?: string
}

export const Header: React.FC<Props> = ({ pageTitle = 'React Hasura App' }) => {
  const { logout } = useAuth0()
  const history = useHistory()

  console.log(history.location.pathname.length)
  return (
    <header className="px-4 h-16 flex items-center bg-white border-b border-gray">
      <h2
        className="text-black w-full text-xl font-bold "
        onClick={() => history.push('/')}
      >
        {pageTitle}
      </h2>
      {/* <button
        className="bg-primary hover:opacity-80 text-white py-2 px-4 rounded"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        ログアウト
      </button> */}
    </header>
  )
}
