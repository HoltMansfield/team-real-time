import React from 'react'
import { Link } from 'react-router-dom'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import TimerIcon from 'material-ui/svg-icons/av/av-timer'
import styled from 'styled-components'
import { StyledLink } from 'styled/links'


const SeperatorPaddedRight = styled(ToolbarSeparator)`
  margin-right: 30px;
`

export default function AppBarLoggedOut(props) {
  return (
    <Toolbar>
      <ToolbarGroup>
        <IconMenu
          iconButtonElement={<IconButton><NavigationMenuIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem primaryText="About us" />
          <MenuItem>
            <StyledLink to="/create-account">
              Create account
            </StyledLink>
          </MenuItem>
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
