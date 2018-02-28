import React, { Component } from 'react'
import { notify } from 'react-notify-toast'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu'
import TimerIcon from 'material-ui/svg-icons/av/av-timer'
import styled from 'styled-components'
import { StyledLink } from 'styled/links'
import setupFirebase from '../../../../../js/setup-firebase'


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
    const { setLoggedInUser, history } = this.props
    this.firebase.auth().signOut()
      .then((res) => {
        setLoggedInUser(null)
        history.push('/')
      })
      .catch((err) => {
        notify.show(`${err.message}`, 'error', 5000)
      })
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={<IconButton><NavigationMenuIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="About us" />
            <MenuItem primaryText="Signout" onClick={this.signOut} />
            <MenuItem>
              <StyledLink to="/login">
                Login
              </StyledLink>
            </MenuItem>
          </IconMenu>
          <SeperatorPaddedRight />
          <TimerIcon />
          <ToolbarTitle text="Team Realtime" />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default AppBarLoggedOut
