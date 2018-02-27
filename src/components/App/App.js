import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import Routes from '../routes/Routes'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../containers/Header/Header'
import { Footer } from '../containers/Footer/Footer'
import Overlay from '../containers/Overlay/Overlay'


export const GlobalStyles = styled(Link)`
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


export class App extends Component {
  render() {
    return (
        <GlobalStyles>
          <Notifications />
          <Overlay />
          <Header />
          <Routes />
          <Footer />
        </GlobalStyles>
    )
  }
}

export default App
