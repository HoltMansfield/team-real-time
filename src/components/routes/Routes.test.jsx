import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { App } from 'App/App'
import createStore from '../../js/create-store'
import NotFound from 'routes/NotFound/NotFound'
import Login from 'routes/Login/Login'


test('invalid path should redirect to 404', () => {
  const store = createStore({})
  const appProps = {
    setLoggedInUser: () => {}
  }

  const wrapper = mount(
    <MuiThemeProvider>
      <Provider store={store}>
        <MemoryRouter initialEntries={[ '/random' ]}>
          <App {...appProps} />
        </MemoryRouter>
      </Provider>
    </MuiThemeProvider>
  )

  expect(wrapper.find(NotFound)).toHaveLength(1)
})

test('login path should redirect to login', () => {
  const store = createStore({})
  const appProps = {
    setLoggedInUser: () => {}
  }

  const wrapper = mount(
    <MuiThemeProvider>
      <Provider store={store}>
        <MemoryRouter initialEntries={[ '/login' ]}>
          <App {...appProps} />
        </MemoryRouter>
      </Provider>
    </MuiThemeProvider>
  )

  expect(wrapper.find(Login)).toHaveLength(1)
})
