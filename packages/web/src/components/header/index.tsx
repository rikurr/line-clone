import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router'

type Props = {
  pageTitle?: string
}

export const Header: React.FC<Props> = ({ pageTitle = 'React Hasura App' }) => {
  const { logout } = useAuth0()
  const history = useHistory()
  return (
    <header className="px-4 h-16 flex justify-between items-center bg-primary">
      <h2
        className="text-white text-xl font-bold"
        onClick={() => history.push('/')}
      >
        {pageTitle}
      </h2>
      <button
        className="bg-primary hover:opacity-80 text-white py-2 px-4 rounded"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        ログアウト
      </button>
    </header>
  )
}
