import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Landing } from 'routes/Landing/Landing'
import CreateAccount from 'routes/CreateAccount/CreateAccount'
import NotFound from 'routes/NotFound/NotFound'


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
