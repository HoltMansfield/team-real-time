import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu'
import styled from 'styled-components'



export default function AppBarLoggedOut(props) {
  const StyledLink = styled(Link)`
    :link {
      text-decoration: none;
      color: black;
    }
    :visited {
      color: black;
    }
    :hover {
      text-decoration: underline;
    }
  `

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
          <MenuItem primaryText="Login" />
        </IconMenu>
      }
    />
  )
}
