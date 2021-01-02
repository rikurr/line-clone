import React from 'react'

type Props = {
  pageTitle?: string
}

export const Header: React.FC<Props> = ({ pageTitle = 'React Hasura App' }) => {
  return (
    <header className="px-4 h-16 flex items-center bg-primary">
      <h2 className="text-textPrimary md:text-xl">{pageTitle}</h2>
    </header>
  )
}
