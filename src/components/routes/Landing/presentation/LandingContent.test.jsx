import React from 'react'
import renderer from 'react-test-renderer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { LandingContent } from './LandingContent'

it('renders correctly', () => {
  const props = {
    login: () => {},
  }
  const component = renderer
    .create(
      <MuiThemeProvider>
        <LandingContent auth={props} />
      </MuiThemeProvider>
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})
