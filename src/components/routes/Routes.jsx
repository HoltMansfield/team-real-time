/* eslint arrow-parens: "off" */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Landing } from './Landing/Landing'
import { NotFound } from './NotFound/NotFound'


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
