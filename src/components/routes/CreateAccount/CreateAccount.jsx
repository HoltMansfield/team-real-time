import React, { Component } from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import * as actions from '../../../redux/actions'
import CreateAccountContent from './presentation/CreateAccountContent'
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
    this.firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  goBack() {
    this.history.goBack()
  }

  render() {
    return (
      <CreateAccountContent save={this.save} cancel={this.goBack} />
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
