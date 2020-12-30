import React from 'react'
import styles from './index.module.css'

type Props = {
  pageTitle?: string
}

export const Header: React.FC<Props> = ({ pageTitle = 'React Hasura App' }) => {
  return (
    <header className="h-66">
      <h2>{pageTitle}</h2>
    </header>
  )
}
