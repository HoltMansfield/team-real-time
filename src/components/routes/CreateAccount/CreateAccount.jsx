import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { withFirebase } from 'react-redux-firebase'
import CreateAccountContent from './presentation/CreateAccountContent'
import setupFirebase from '../../../js/setup-firebase'


export class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
    this.goBack = this.goBack.bind(this)
    this.firebase = setupFirebase()
  }

  createUserProfile(res, firestore) {
    return firestore.add('userProfile', {
      firebaseId: res.user.uid
    })
  }

  save(newUser) {
    const { history, firestore } = this.props

    this.firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => this.createUserProfile(res, firestore))
      .then(() => {
        notify.show(`Account created for: ${newUser.email}`, 'success', 5000)
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
      <CreateAccountContent save={this.save} cancel={this.goBack} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    firestore: state.firestore
  }
}

export default compose(
  connect(mapStateToProps, () => ({})),
  withRouter
)(CreateAccount)
