import { Component } from 'react'
import { connect } from 'react-redux'


export class LoggedOutContent extends Component {
  render() {
    if (!this.props.loggedInUser) {
      return this.props.children
    }

    return null
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser
  }
}

export default connect(mapStateToProps)(LoggedOutContent)
