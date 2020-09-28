import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-boostrap/Nav';

function NavigationBar() {
  const { onLinkClick } = props;
  return (
    <Navbar bg='dark' expand='lg'>
      <Nav className='mr-auto'>
        <Nav.Link href={onLinkClick}>Search By Drink Name</Nav.Link>
      </Nav>
    </Navbar>
  )
}

NavigationBar.propTypes = {
  onLinkClick: PropTypes.func
}

export default NavigationBar;