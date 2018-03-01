import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Landing } from 'routes/Landing/Landing'
import { AboutUs } from 'routes/AboutUs/AboutUs'
import CreateAccount from 'routes/CreateAccount/CreateAccount'
import Login from 'routes/Login/Login'
import NotFound from 'routes/NotFound/NotFound'


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
