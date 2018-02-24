import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu'


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
          <MenuItem primaryText="Create Account" />
          <MenuItem primaryText="Login" />
        </IconMenu>
      }
    />
  )
}
