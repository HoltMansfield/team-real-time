import React from 'react'
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

export default function AppBarLoggedIn(props) {
  return (
    <Toolbar>
      <ToolbarGroup>
        <IconMenu
          iconButtonElement={<IconButton><NavigationMenuIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem primaryText="Do password reset" />
          <MenuItem primaryText="Sign Out">
          </MenuItem>
        </IconMenu>
        <SeperatorPaddedRight />
        <TimerIcon />
        <ToolbarTitle text="Team Realtime" />
      </ToolbarGroup>
    </Toolbar>
  )
}
