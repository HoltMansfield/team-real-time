import { combineReducers } from 'redux'
import { firestoreReducer as firestore } from 'redux-firestore'
import { firebaseReducer as firebase } from 'react-redux-firebase'
import loggedInUser from './loggedInUser/loggedInUser'
import uiSettings from './uiSettings/uiSettings'



const rootReducer = combineReducers({
  loggedInUser,
  uiSettings,
  firestore,
  firebase
});

export default rootReducer
