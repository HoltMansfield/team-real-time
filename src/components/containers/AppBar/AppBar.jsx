import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import AppBarContent from './presentation/AppBarContent'
import setupFirebase from '../../../js/setup-firebase'


export class AppBar extends Component {
  constructor(props) {
    super(props)
    this.signOut = this.signOut.bind(this)
    this.firebase = setupFirebase()
  }

  signOut() {
    // NOT SURE IF ASYNC
    const { setLoggedInUser, history } = this.props
    this.firebase.auth().signOut()
      .then((res) => {
        setLoggedInUser(null)
        history.push('/')
      })
      .catch((err) => {
        notify.show(`${err.message}`, 'error', 5000)
      })
  }

  render() {
    return (
      <AppBarContent
        signOut={this.signOut}
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
