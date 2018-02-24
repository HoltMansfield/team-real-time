import React from 'react'
import { shallow } from 'enzyme'
import { LoggedOutContent } from './LoggedOutContent'


describe('LoggedOutContent component', () => {
  it('renders', () => {
    const content = (
      <LoggedOutContent>
        <div className="foo" />
      </LoggedOutContent>
    )

    const wrapper = shallow(content)

    expect(wrapper.find('.foo').length).toEqual(1);
  })

  it('renders', () => {
    const content = (
      <LoggedOutContent loggedInUser={{}}>
        <div className="foo" />
      </LoggedOutContent>
    )

    const wrapper = shallow(content)

    expect(wrapper.find('.foo').length).toEqual(0);
  })
})
