import React from 'react'
import renderer from 'react-test-renderer'
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { LandingContent } from './LandingContent'


it('renders correctly', () => {
  const props = {
    login: () => {},
  }

  const wrapper = shallow(
    <MuiThemeProvider>
      <LandingContent auth={props} />
    </MuiThemeProvider>
  )

  expect(toJson(wrapper)).toMatchSnapshot()
})
