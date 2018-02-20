import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reduxFirestore } from 'redux-firestore'
import reducer from '../redux/reducers'


const makeStore = (firebase) => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
    reduxFirestore(firebase)
  )

  return store
}

export default makeStore
