import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import loggedInUser from './loggedInUser/loggedInUser'
import uiSettings from './uiSettings/uiSettings'



const rootReducer = combineReducers({
  loggedInUser,
  uiSettings,
  firestore: firestoreReducer
});

export default rootReducer
