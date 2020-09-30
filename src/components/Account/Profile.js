import React from 'react';
import PasswordChange from './PasswordChange';
import NameChange from './NameChange';
import withAuthorization from './../Session/withAuthorization';

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

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Profile);