import React from 'react'
import { shallow } from 'enzyme'
import { HeaderContent } from './HeaderContent'

describe('HeaderContent component', () => {
  it('renders', () => {
    const history = {
      location: {
        pathname: '/'
      }
    }

    const content = (
      <HeaderContent history={history} />
    )

    const wrapper = shallow(content)
    expect(wrapper).toBeDefined()
  })
})
