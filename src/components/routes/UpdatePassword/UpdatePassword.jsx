import React, { Component } from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import * as actions from '../../../redux/actions'
import setupFirebase from '../../../js/setup-firebase'
import UpdatePasswordContent from './presentation/UpdatePasswordContent'


export class updatePassword extends Component {
  constructor(props) {
    super(props)
    this.updatePassword = this.updatePassword.bind(this)
    this.goBack = this.goBack.bind(this)
    this.firebase = setupFirebase()
  }

  updatePassword(password) {
    // NOT SURE IF ASYNC
    this.firebase.auth().currentUser.updatePassword(password)
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
      <UpdatePasswordContent updatePassword={this.updatePassword} cancel={this.goBack} />
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
)(updatePassword)
