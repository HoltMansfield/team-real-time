import React, { Component } from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import * as actions from '../../../redux/actions'
import LoginContent from './presentation/LoginContent'
import setupFirebase from '../../../js/setup-firebase'


// toDo: redirect logged in user
export class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
    this.goBack = this.goBack.bind(this)
    this.firebase = setupFirebase()
  }

  save(newUser) {
    const { setLoggedInUser, history } = this.props
    this.firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
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
)(CreateAccount)
