import React from 'react'

import {
  Link,
  Outlet
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Navigation() {
  return (
    <>
      <Navbar key="lg" bg="primary" expand="lg" sticky="top" >
        <Container fluid>
          <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-lg'} />
          <Navbar.Brand className="fw-bold text-light" href="#">PERN Notepad</Navbar.Brand>
          <Navbar.Offcanvas
            id={'offcanvasNavbar-expand-lg'}
            aria-labelledby={'offcanvasNavbarLabel-expand-lg'}
            placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={'offcanvasNavbarLabel-expand-lg'}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-end">
              <Nav>
                <Nav.Link className="text-light" as={Link} to="/">Main</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </>

  )
}
