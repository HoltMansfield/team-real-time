import React, { Component } from 'react'
import { LandingContent } from './presentation/LandingContent'


export class Landing extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login() {
    //
  }

  render() {
    return (
      <LandingContent />
    )
  }
}

export default Landing
