import React from 'react'
import styled from 'styled-components'

const HideForDevice = styled.div`
  @media screen and (min-width: 0px) and (max-width: 1024px) {
    display: none;
  }
`

export default function DesktopOnly(props) {
  return (
    <HideForDevice>
      {props.children}
    </HideForDevice>
  )
}
