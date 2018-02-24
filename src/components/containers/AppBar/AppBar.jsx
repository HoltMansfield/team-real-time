import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import AppBarContent from './presentation/AppBarContent'


export class AppBar extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.handleSpaceKey = this.handleSpaceKey.bind(this)
  }

  login() {

  }

  handleSpaceKey(e) {
    if (e.keyCode === 32) {
      this.login()
    }
  }

  render() {
    return (
      <AppBarContent
        login={this.login}
        handleSpaceKey={this.handleSpaceKey}
        loggedInUser={this.props.loggedInUser}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(AppBar)
