import React from 'react'
import renderer from 'react-test-renderer'
import { NotFoundContent } from './NotFoundContent'

it('renders correctly', () => {
  const component = renderer
    .create(<NotFoundContent />)
    .toJSON()
  expect(component).toMatchSnapshot()
})
