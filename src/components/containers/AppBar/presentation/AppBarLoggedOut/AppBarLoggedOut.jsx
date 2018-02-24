import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu'
import { StyledLink } from 'styled/links'



export default function AppBarLoggedOut(props) {
  return (
    <AppBar
      title="Team Real Time"
      iconElementLeft={
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
      }
    />
  )
}
