import React from 'react';
import PasswordChange from './PasswordChange';
import NameChange from './NameChange';

function Profile() {
  return (
    <React.Fragment>
      <h6>Change Your Name:</h6>
      <NameChange />
      <h6>Change Your Password:</h6>
      <PasswordChange />
    </React.Fragment>
  )
}

export default Profile;