import React from 'react'
import renderer from 'react-test-renderer'
import HeaderContentLoggedOut from '../HeaderContentLoggedOut'

it('renders correctly', () => {
  const component = renderer
    .create(<HeaderContentLoggedOut />)
    .toJSON()
  expect(component).toMatchSnapshot()
})
