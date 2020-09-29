import React, { useState } from 'react';
import { withFirebase } from './Firebase';
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
    <DrinkControl authUser={authUser} />
  );
}

export default withFirebase(App);