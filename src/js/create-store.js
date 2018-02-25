import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reduxFirestore } from 'redux-firestore'
import { reactReduxFirebase } from 'react-redux-firebase'
import reducer from '../redux/reducers'

// https://github.com/prescottprue/react-redux-firebase
const reactReduxFirebaseConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const makeStore = (firebase) => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, reactReduxFirebaseConfig),
  )

  return store
}

export default makeStore
