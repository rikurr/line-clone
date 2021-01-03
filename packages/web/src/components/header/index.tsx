import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  pageTitle?: string
}

export const Header: React.FC<Props> = ({ pageTitle = 'React Hasura App' }) => {
  const { logout } = useAuth0()
  return (
    <header className="px-4 h-16 flex items-center bg-primary">
      <h2 className="text-textPrimary md:text-xl">{pageTitle}</h2>
      <button
        className="bg-primary hover:opacity-80 text-textPrimary font-bold py-2 px-4 rounded"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        ログアウト
      </button>
    </header>
  )
}
