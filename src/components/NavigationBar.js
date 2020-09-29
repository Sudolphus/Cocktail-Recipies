import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignOut from './Account/SignOut';

function NavigationBar(props) {
  const { authUser } = props;

  const accountLink = authUser ? <Nav className='mr-auto'><SignOut /></Nav> : <Nav.Link href='/account' className='mr-auto'>Account</Nav.Link>;

  return (
    <Navbar bg='light' expand='lg'>
      <Nav className='mr-auto'>
        <Nav.Link href="/" className='mr-auto'>Home</Nav.Link>
        <NavDropdown title='Search For A Drink!' id='basic-nav-dropdown' className='mr-auto'>
          <NavDropdown.Item href="/name-search">Search By Drink Name</NavDropdown.Item>
          <NavDropdown.Item href="/alcohol-search">Search By Alcohol</NavDropdown.Item>
          <NavDropdown.Item href="/letter-search">Search By First Letter</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/random-cocktail" className='mr-auto'>Get Random Drink!</Nav.Link>
      </Nav>
      {accountLink}
    </Navbar>
  )
}

export default NavigationBar;