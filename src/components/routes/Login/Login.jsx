import React, { Component } from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import { withFirebase } from 'react-redux-firebase'
import LoginContent from './presentation/LoginContent'
import setupFirebase from '../../../js/setup-firebase'


export class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
    this.goBack = this.goBack.bind(this)
    this.firebase = setupFirebase()
  }

  save(newUser) {
    const { history } = this.props

    //this.firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
    this.firebase.auth().signInAndRetrieveDataWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        notify.show(`Logged in as ${newUser.email}`, 'success', 700)
        history.push('/dashboard')
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
      <LoginContent save={this.save} cancel={this.goBack} />
    )
  }
}

export default compose(
  withRouter
)(CreateAccount)
