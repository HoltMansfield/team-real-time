import React from 'react'
import AppBar from '../AppBar/AppBar'
import DesktopOnly from '../DesktopOnly/DesktopOnly'


export default function Header(props) {
  return (
    <DesktopOnly>
      <AppBar />
    </DesktopOnly>
  )
}
