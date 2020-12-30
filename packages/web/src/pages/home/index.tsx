import React from 'react'
import { Header } from '../../components/header'
import styles from './index.module.css'
import { useAuth0 } from '@auth0/auth0-react'

export const Home: React.FC = () => {
  const { logout } = useAuth0()

  return (
    <>
      <Header pageTitle="Home" />
      <h1>ログイン完了</h1>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        ログアウト
      </button>
    </>
  )
}
