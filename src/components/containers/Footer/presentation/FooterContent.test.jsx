import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FooterContent } from './FooterContent'


it('renders correctly', () => {
  const wrapper = shallow(<FooterContent />)

  expect(toJson(wrapper)).toMatchSnapshot()
})
