import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppBarLoggedOut from './AppBarLoggedOut'


it('renders correctly', () => {
  const wrapper = shallow(<AppBarLoggedOut />)

  expect(toJson(wrapper)).toMatchSnapshot()
})
