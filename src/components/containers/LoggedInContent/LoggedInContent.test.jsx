import React from 'react'
import { shallow } from 'enzyme'
import { LoggedInContent } from '../LoggedInContent'


describe('LoggedInContent component', () => {
  it('renders', () => {
    const content = (
      <LoggedInContent>
        <div className="foo" />
      </LoggedInContent>
    )

    const wrapper = shallow(content)

    expect(wrapper.find('.foo').length).toEqual(0);
  })

  it('renders', () => {
    const content = (
      <LoggedInContent loggedInUser={{}}>
        <div className="foo" />
      </LoggedInContent>
    )

    const wrapper = shallow(content)

    expect(wrapper.find('.foo').length).toEqual(1);
  })
})
