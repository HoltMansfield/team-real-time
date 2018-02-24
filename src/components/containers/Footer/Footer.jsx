import React from 'react'
import AppBar from '../AppBar/AppBar'
import styled from 'styled-components'
import DeviceOnly from '../DeviceOnly/DeviceOnly'


export function Footer() {
  const StickyFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    height: 65px;
    width: 100%;
  `

  return (
    <StickyFooter>
      <DeviceOnly>
        <AppBar />
      </DeviceOnly>
    </StickyFooter>
  )
}
