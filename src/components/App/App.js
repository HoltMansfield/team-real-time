import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import Routes from '../routes/Routes'
import Header from '../containers/Header/Header'
import { Footer } from '../containers/Footer/Footer'
import Overlay from '../containers/Overlay/Overlay'
import * as actions from '../../redux/actions'
import setupFirebase from '../../js/setup-firebase'


export class App extends Component {
  constructor(props) {
    super(props)
    this.firebase = setupFirebase()
  }

  componentDidMount() {
    const { setLoggedInUser } = this.props
    this.firebase.auth().onAuthStateChanged(authUser => {
      setLoggedInUser(authUser)
    })
  }

  render() {
    return (
      <div>
        <Notifications options={{zIndex: 5000}} />
        <Overlay />
        <Header />
        <Routes />
        <Footer />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInUser: user => dispatch(actions.loggedInUser.setLoggedInUser(user))
  }
}

export default compose(
  withRouter,
  connect(() => ({}), mapDispatchToProps)
)(App)
