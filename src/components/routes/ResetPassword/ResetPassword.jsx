import React, { Component } from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import * as actions from '../../../redux/actions'
import setupFirebase from '../../../js/setup-firebase'
import ResetPasswordContent from './presentation/ResetPasswordContent'


export class ResetPassword extends Component {
  constructor(props) {
    super(props)
    this.reset = this.reset.bind(this)
    this.goBack = this.goBack.bind(this)
    this.firebase = setupFirebase()
  }

  reset(email) {
    // NOT SURE IF ASYNC
    this.firebase.auth().sendPasswordResetEmail(email)
      .then((res) => {
        // toDo: notify user success
      })
      .catch((err) => {
        notify.show(`${err.message}`, 'error', 5000)
      })
  }

  goBack() {
    this.history.goBack()
  }

  render() {
    return (
      <ResetPasswordContent reset={this.reset} cancel={this.goBack} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInUser: user => dispatch(actions.loggedInUser.setLoggedInUser(user))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ResetPassword)
