import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Nav className='mr-auto'>
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title='Search For A Drink!' id='basic-nav-dropdown'>
          <NavDropdown.Item href="/name-search">Search By Drink Name</NavDropdown.Item>
          <NavDropdown.Item href="/alcohol-search">Search By Alcohol</NavDropdown.Item>
          <NavDropdown.Item href="/letter-search">Search By First Letter</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/random-cocktail">Get Random Drink!</Nav.Link>
        <Nav.Link href='/account'>Account</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar;