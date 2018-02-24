import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HeaderContentLoggedOut from './HeaderContentLoggedOut'


it('renders correctly', () => {
  const wrapper = shallow(<HeaderContentLoggedOut />)

  expect(toJson(wrapper)).toMatchSnapshot()
})
