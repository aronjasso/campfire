import { Link } from 'gatsby';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar expand="lg" variant="light">
    <Container>
      <Navbar.Brand>
        <Link className="lead" to="/">aron.</Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Link className="nav-link" to="/about">about</Link>
        <Link className="nav-link" to="/work">work</Link>
        <a
          className="nav-link"
          href="mailto:aron.jasso@gmail.com"
        >contact</a>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
