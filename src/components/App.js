import React, { useState } from 'react';
import { withFirebase } from './Firebase';
import AuthUserContext from './Session/index';
import DrinkControl from './DrinkControl';

function App(props) {
  const [authUser, setAuthUser] = useState(null);

  props.firebase.auth.onAuthStateChanged(function(user) {
    if (user) {
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
  })

  return (
    <AuthUserContext.Provider value={authUser} >
      <DrinkControl />
    </AuthUserContext.Provider>
  );
}

export default withFirebase(App);