import React, { Component } from 'react'
import { connect } from 'react-redux'
import OverlayContent from './presentation/OverlayContent'


export class Overlay extends Component {
  render() {
    if (this.props.showOverlay) {
      return (
        <OverlayContent />
      )
    }

    return null
  }
}

const mapStateToProps = (state) => {
  return {
    showOverlay: state.uiSettings.showOverlay
  }
}

export default connect(mapStateToProps)(Overlay)
