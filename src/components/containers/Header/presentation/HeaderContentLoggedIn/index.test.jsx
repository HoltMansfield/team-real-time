import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import HeaderContentLoggedIn from '../HeaderContentLoggedIn'

it('renders correctly', () => {
  const props = {
    loggedInUser: {}
  }
  const componentTree = (
    <BrowserRouter>
      <HeaderContentLoggedIn {...props} />
    </BrowserRouter>
  )

  const component = renderer
    .create(componentTree)
    .toJSON()
  expect(component).toMatchSnapshot()
})
