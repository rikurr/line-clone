import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import { Routes } from './routes/index'

function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN!}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
        redirectUri={window.location.origin}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE!}
        scope="read:current_user read:users_app_metadata"
      >
        <Routes />
      </Auth0Provider>
    </BrowserRouter>
  )
}

export default App
