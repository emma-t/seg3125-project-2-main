import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function PageNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <div className='title'><Navbar.Brand as={NavLink} to="/">ReviveMart</Navbar.Brand></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/donate">Donate</Nav.Link>
            <Nav.Link as={NavLink} to="/items">Our Items</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/faq-reviews">FAQ & Reviews</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
