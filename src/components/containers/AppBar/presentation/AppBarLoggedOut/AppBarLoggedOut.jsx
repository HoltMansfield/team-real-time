import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu'
import TimerIcon from 'material-ui/svg-icons/av/av-timer'
import styled from 'styled-components'
import { StyledLink } from 'styled/links'


const SeperatorPaddedRight = styled(ToolbarSeparator)`
  margin-right: 30px;
`

export class AppBarLoggedOut extends Component {
  navigate(route) {
    this.props.history.push(`/${route}`)
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
            <MenuItem primaryText="About Us" onClick={() => this.navigate('about-us')} />
            <MenuItem primaryText="Create Account" onClick={() => this.navigate('create-account')} />
            <MenuItem primaryText="Login" onClick={() => this.navigate('login')} />
          </IconMenu>
          <SeperatorPaddedRight />
          <TimerIcon />
          <ToolbarTitle text="Team Realtime" />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default withRouter(AppBarLoggedOut)
