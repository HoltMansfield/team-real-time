import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './_ProtectedRoute/ProtectedRoute'
import { Landing } from 'routes/Landing/Landing'
import CreateAccount from 'routes/CreateAccount/CreateAccount'
import ResetPassword from 'routes/ResetPassword/ResetPassword'
import UpdatePassword from 'routes/UpdatePassword/UpdatePassword'
import Login from 'routes/Login/Login'
import Dashboard from 'routes/Dashboard/Dashboard'
import NotFound from 'routes/NotFound/NotFound'


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/update-password" component={UpdatePassword} />
        <ProtectedRoute exact path="/reset-password" component={ResetPassword} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
