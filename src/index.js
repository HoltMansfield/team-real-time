import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createStore from './js/create-store'
import setupFirebase from './js/setup-firebase'
import App from 'App/App'

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const firebase = setupFirebase()
const store = createStore(firebase)

const rootElement = document.getElementById('root')
const app =
  (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );

ReactDOM.render(
  app,
  rootElement,
)
