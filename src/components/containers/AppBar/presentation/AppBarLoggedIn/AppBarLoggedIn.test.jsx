import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom'
import AppBarLoggedIn from './AppBarLoggedIn'


it('renders correctly', () => {
  const props = {
    loggedInUser: {}
  }
  const componentTree = (
    <BrowserRouter>
      <AppBarLoggedIn {...props} />
    </BrowserRouter>
  )
  const wrapper = shallow(componentTree)

  expect(toJson(wrapper)).toMatchSnapshot()
})
