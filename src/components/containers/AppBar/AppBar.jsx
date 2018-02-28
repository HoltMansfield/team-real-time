import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import AppBarContent from './presentation/AppBarContent'


export class AppBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppBarContent
        loggedInUser={this.props.loggedInUser}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(AppBar)
