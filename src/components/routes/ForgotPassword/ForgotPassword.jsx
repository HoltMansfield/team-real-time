import React, { Component } from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import { withFirebase } from 'react-redux-firebase'
import ForgotPasswordContent from './presentation/ForgotPasswordContent'
import setupFirebase from '../../../js/setup-firebase'


export class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
    this.goBack = this.goBack.bind(this)
    this.firebase = setupFirebase()
  }

  save(email) {
    const { history } = this.props
    const x = this.firebase.auth()
    this.firebase.auth().sendPasswordResetEmail(email)
      .then((res) => {
        notify.show(`Reset password code sent to ${email}`, 'success', 5000)
      })
      .catch((err) => {
        notify.show(`${err.message}`, 'error', 5000)
      })
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <ForgotPasswordContent save={this.save} cancel={this.goBack} />
    )
  }
}

export default withRouter(ForgotPassword)
