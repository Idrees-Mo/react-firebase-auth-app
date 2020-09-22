import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDi1QRYphO9XiI6JRRMZ-e6fQlE-d1kkD0",
  authDomain: "react-firebase-auth-idrees.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-idrees.firebaseio.com",
  projectId: "react-firebase-auth-idrees",
  storageBucket: "react-firebase-auth-idrees.appspot.com",
  messagingSenderId: "282782274908",
  appId: "1:282782274908:web:676cdc7f4d472760559d99",
  measurementId: "G-4JKKFJ6KBK"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;