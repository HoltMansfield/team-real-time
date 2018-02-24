import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom'
import HeaderContentLoggedIn from './HeaderContentLoggedIn'


it('renders correctly', () => {
  const props = {
    loggedInUser: {}
  }
  const componentTree = (
    <BrowserRouter>
      <HeaderContentLoggedIn {...props} />
    </BrowserRouter>
  )
  const wrapper = shallow(componentTree)

  expect(toJson(wrapper)).toMatchSnapshot()
})
