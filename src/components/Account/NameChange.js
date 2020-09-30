import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from '../Firebase';
// import { withAuthContext } from '../Session/index';
// import { compose } from 'recompose';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NameChangeBase(props) {
  const { firebase } = props;
  const history = useHistory();
  const [newName, setNewName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() =>
    firebase.auth.onAuthStateChanged(function(user) {
      if (user) {
        setNewName(user.displayName || '');
      }
    }), [firebase.auth]
  )

  const onSubmit = event => {
    event.preventDefault();
    console.log(newName);
    firebase.auth.currentUser.updateProfile({ displayName: newName })
      .then(() => {
        setNewName('');
        setError(null);
        history.push('/');
      })
      .catch(error => setError(error));
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId='newName'>
        <Form.Control
          type='text'
          placeholder='New Name'
          value={newName}
          onChange={event => setNewName(event.target.value)} />
      </Form.Group>
      <Button variant='dark' type='submit'>Change Name</Button>
      {error && error.message}
    </Form>
  )
}

const NameChange = withFirebase(NameChangeBase);

export default NameChange;