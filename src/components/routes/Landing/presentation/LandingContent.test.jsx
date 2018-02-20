import React from 'react'
import renderer from 'react-test-renderer'
import { LandingContent } from './LandingContent'

it('renders correctly', () => {
  const props = {
    login: () => {},
  }
  const component = renderer
    .create(<LandingContent auth={props} />)
    .toJSON()
  expect(component).toMatchSnapshot()
})
