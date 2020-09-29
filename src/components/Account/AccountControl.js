import React from 'react';
import { FirebaseContext } from './../Firebase';
import SignUp from './SignUp';

function AccountControl() {
  return (
    <FirebaseContext.Consumer>
      {firebase => <SignUp firebase={firebase} />}
    </FirebaseContext.Consumer>
  )
}

export default AccountControl;