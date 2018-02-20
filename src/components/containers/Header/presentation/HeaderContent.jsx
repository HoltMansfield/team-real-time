import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderContentLoggedIn from './HeaderContentLoggedIn'
import HeaderContentLoggedOut from './HeaderContentLoggedOut'
import LoggedInContent from '../../LoggedInContent/LoggedInContent'
import LoggedOutContent from '../../LoggedOutContent/LoggedOutContent'


export class HeaderContent extends Component {
  render() {
    return (
      <div>
        <LoggedInContent>
          <HeaderContentLoggedIn loggedInUser={this.props.loggedInUser} />
        </LoggedInContent>
        <LoggedOutContent>
          <HeaderContentLoggedOut
            login={this.props.login}
            handleSpaceKey={this.props.handleSpaceKey}
          />
        </LoggedOutContent>
      </div>
    )
  }
}

export default withRouter(HeaderContent)
