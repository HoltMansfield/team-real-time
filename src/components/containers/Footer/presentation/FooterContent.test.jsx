import React from 'react'
import { shallow } from 'enzyme'
import { FooterContent } from './FooterContent'

describe('FooterContent component', () => {
  it('renders', () => {
    const history = {
      location: {
        pathname: '/terms-and-conditions'
      }
    }

    const content = (
      <FooterContent history={history} />
    )

    const wrapper = shallow(content)
    expect(wrapper.type()).toEqual(null)
  })

  it('renders', () => {
    const history = {
      location: {
        pathname: '/'
      }
    }

    const content = (
      <FooterContent history={history} />
    )

    const wrapper = shallow(content)
    expect(wrapper).toBeDefined()
  })
})
