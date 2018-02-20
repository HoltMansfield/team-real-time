import React from 'react'
import { shallow } from 'enzyme'
import { Landing } from './Landing'


describe('Landing component', () => {
  it('renders', () => {
    const wrapper = shallow(<Landing />)

    expect(wrapper).toBeDefined()
  })
})
