import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createStore from './js/create-store'
import setupFirebase from './js/setup-firebase'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'


const firebase = setupFirebase()
const store = createStore(firebase)


const rootElement = document.getElementById('root')
const app =
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

ReactDOM.render(
  app,
  rootElement,
);

registerServiceWorker()
