import React from 'react'

export default class extends React.Component {
  render() {
      return (
          <div id='43'/>
      );
  }
}

const mockShow = jest.fn()

export const notify = {
  show: jest.fn()
}
