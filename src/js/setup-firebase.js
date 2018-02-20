import firebase from 'firebase'
import 'firebase/firestore'


// toDo: move to config file
const firebaseConfig = {
    apiKey: "AIzaSyBWf3-Pe0GK4rxzqFFlLkq12mkyqBwneew",
    authDomain: "teamrealtime-c7174.firebaseapp.com",
    databaseURL: "https://teamrealtime-c7174.firebaseio.com",
    projectId: "teamrealtime-c7174",
    storageBucket: "",
    messagingSenderId: "821975896645"
}


const setup = () => {
  // Initialize firebase instance
  firebase.initializeApp(firebaseConfig)
  // Initialize Cloud Firestore through Firebase
  firebase.firestore()

  return firebase
}

export default setup
export const firebaseAuth = firebase.auth
