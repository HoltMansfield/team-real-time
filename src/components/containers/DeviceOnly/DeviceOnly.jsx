import React from 'react'
import styled from 'styled-components'

const HideForDesktop = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`

export default function DeviceOnly(props) {
  return (
    <HideForDesktop>
      {props.children}
    </HideForDesktop>
  )
}
