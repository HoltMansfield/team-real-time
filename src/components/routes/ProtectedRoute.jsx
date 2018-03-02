import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


class ProtectedRoute extends Component {
  render() {
    const {component: Component, loggedInUser, ...rest} = this.props

    return (
      <Route
        {...rest}
        render={(props) => {
          return loggedInUser != null
          ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  }
}

export default connect(mapStateToProps)(ProtectedRoute)
