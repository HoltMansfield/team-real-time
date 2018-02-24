import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'


export default function HeaderContentLoggedIn(props) {
  return (
    <AppBar
      title="team-real-time"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  )
}
