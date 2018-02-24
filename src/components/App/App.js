import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import Routes from '../routes/Routes'
import Header from '../containers/Header/Header'
import { Footer } from '../containers/Footer/Footer'
import Overlay from '../containers/Overlay/Overlay'


export class App extends Component {
  render() {
    return (
      <div>
        <Notifications />
        <Overlay />
        <Header />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App;
