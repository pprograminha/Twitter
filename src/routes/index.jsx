import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from '../pages/Profile'
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes