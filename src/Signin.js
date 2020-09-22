import React from 'react'
import { signInWithGoogle, auth } from './firebase/firebase.utils'

const Signin = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>SignIn</button>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Signin