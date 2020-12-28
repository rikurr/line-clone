import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '../pages/home'

export const Private: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
