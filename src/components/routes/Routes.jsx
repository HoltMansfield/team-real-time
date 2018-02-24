/* eslint arrow-parens: "off" */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Landing } from 'routes/Landing/Landing'
import { NotFound } from 'routes/NotFound/NotFound'


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
