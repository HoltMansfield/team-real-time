import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'


describe('App component', () => {
  it('renders', () => {
    const props = {
      setLoggedInUser: () => {}
    }

    const wrapper = shallow(<App {...props} />)

    expect(wrapper).toBeDefined()
  })
})
