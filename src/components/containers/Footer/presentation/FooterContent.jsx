import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const StickyFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: blue;
`

export class FooterContent extends Component {
  render() {
    return (
      <StickyFooter>
        Footer
      </StickyFooter>
    )
  }
}

export default withRouter(FooterContent)
