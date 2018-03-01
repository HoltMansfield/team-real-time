import React, { Component } from 'react'
import { notify } from 'react-notify-toast'
import { withRouter } from 'react-router-dom'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu'
import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import TimerIcon from 'material-ui/svg-icons/av/av-timer'
import styled from 'styled-components'
import { StyledLink } from 'styled/links'
import setupFirebase from '../../../../../js/setup-firebase'
import DesktopOnly from 'containers/DesktopOnly/DesktopOnly'


const SeperatorPaddedRight = styled(ToolbarSeparator)`
  margin-right: 30px;
`

export class AppBarLoggedOut extends Component {
  constructor(props) {
    super(props)
    this.signOut = this.signOut.bind(this)
    this.firebase = setupFirebase()
  }

  signOut() {
    // NOT SURE IF ASYNC
    const { history } = this.props

    this.firebase.auth().signOut()
      .then((res) => {
        history.push('/')
      })
      .catch((err) => {
        notify.show(`${err.message}`, 'error', 5000)
      })
  }

  navigate(route) {
    this.props.history.push(`/${route}`)
  }

  render() {
    const { loggedInUser } = this.props

    return (
      <Toolbar>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={<IconButton><NavigationMenuIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="About us" onClick={() => this.navigate('about-us')} />
          </IconMenu>
          <SeperatorPaddedRight />
          <TimerIcon />
          <ToolbarTitle text="Team Realtime" />
        </ToolbarGroup>
        <ToolbarGroup>
          <DesktopOnly>
            <span>{loggedInUser.email}</span>
          </DesktopOnly>
          <IconMenu
            iconButtonElement={<IconButton><AccountIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="User Profile" onClick={() => this.navigate('profile')} />
            <MenuItem primaryText="Signout" onClick={this.signOut} />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default withRouter(AppBarLoggedOut)
