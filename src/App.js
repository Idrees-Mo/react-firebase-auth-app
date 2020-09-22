import React, { useState, useEffect, Children } from 'react';
import './App.css';
import './Signin'
import Signin from './Signin';
import { auth } from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(user)
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div className="App">
      <h1>firebase auth app   </h1>
      {currentUser ? `HELLO,  ${currentUser.providerData[0].displayName}` : null}
      <Signin />
    </div>
  );
}

export default App;