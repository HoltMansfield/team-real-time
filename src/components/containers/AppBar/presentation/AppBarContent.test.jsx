import React from 'react'
import { shallow } from 'enzyme'
import { AppBarContent } from './AppBarContent'

describe('AppBarContent component', () => {
  it('renders', () => {
    const history = {
      location: {
        pathname: '/'
      }
    }

    const content = (
      <AppBarContent history={history} />
    )

    const wrapper = shallow(content)
    expect(wrapper).toBeDefined()
  })
})
