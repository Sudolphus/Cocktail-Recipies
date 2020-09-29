import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);

  const isInvalid = password1 !== password2 || password1 === '' || email === '' || username === '';

  const onSubmit = event => {
    event.preventDefault();
    props.firebase
      .doCreateUserWithEmailAndPassword(email, password1)
      .then(authUser => {
        setUsername('');
        setEmail('');
        setPassword1('');
        setPassword2('');
        setError(null);
      })
      .catch(error => setError(error));
  }

  return (
    <React.Fragment>
      <Form onSubmit={onSubmit}>
        <Form.Group controlid='signupUsername'>
          <Form.Control 
            type='text' 
            placeholder='User Name'
            value={username}
            onChange={() => setUsername(this.value) } />
        </Form.Group>
        <Form.Group controlId='signupEmail'>
          <Form.Control 
            type='text' 
            placeholder='Email'
            value={email}
            onChange={() => setEmail(this.value)} />
        </Form.Group>
        <Form.Group controlId='signupPassword'>
          <Form.Control 
            type='password' 
            placeholder='Password'
            value={password1}
            onChange={() => setPassword1(this.value)} />
        </Form.Group>
        <Form.Group controlId='signupPassword2'>
          <Form.Control 
            type='password' 
            placeholder='Confirm Password'
            value={password2}
            onChange={() => setPassword2(this.value)} />
        </Form.Group>
        <Button type='submit' variant='primary' disabled={isInvalid}>Sign Up</Button>

        {error && <p>{error.message}</p>}
      </Form>
    </React.Fragment>
  );
}

export default SignUp;