import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Nav className='mr-auto'>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/name-search">Search By Drink Name</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar;