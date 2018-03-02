import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

// open routes
import { Landing } from 'routes/Landing/Landing'
import { AboutUs } from 'routes/AboutUs/AboutUs'
import CreateAccount from 'routes/CreateAccount/CreateAccount'
import Login from 'routes/Login/Login'
import ForgotPassword from 'routes/ForgotPassword/ForgotPassword'
import NotFound from 'routes/NotFound/NotFound'

// protected routes
import UpdatePassword from 'routes/UpdatePassword/UpdatePassword'


class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Open Routes */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        {/* Protected Routes */}
        <ProtectedRoute exact path="/update-password" component={UpdatePassword} />
        {/* Catch-all route must be last route */}
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
