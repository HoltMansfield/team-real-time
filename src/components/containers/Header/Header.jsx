import React from 'react'
import AppBar from 'containers/AppBar/AppBar'
import DesktopOnly from 'containers/DesktopOnly/DesktopOnly'


export default function Header(props) {
  return (
    <DesktopOnly>
      <AppBar />
    </DesktopOnly>
  )
}
