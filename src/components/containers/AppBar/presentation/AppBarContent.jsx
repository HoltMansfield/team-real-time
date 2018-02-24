import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AppBarLoggedIn from './AppBarLoggedIn/AppBarLoggedIn'
import AppBarLoggedOut from './AppBarLoggedOut/AppBarLoggedOut'
import LoggedInContent from 'containers/LoggedInContent/LoggedInContent'
import LoggedOutContent from 'containers/LoggedOutContent/LoggedOutContent'


export class AppBarContent extends Component {
  render() {
    return (
      <div>
        <LoggedInContent>
          <AppBarLoggedIn loggedInUser={this.props.loggedInUser} />
        </LoggedInContent>
        <LoggedOutContent>
          <AppBarLoggedOut
            login={this.props.login}
            handleSpaceKey={this.props.handleSpaceKey}
          />
        </LoggedOutContent>
      </div>
    )
  }
}

export default withRouter(AppBarContent)
