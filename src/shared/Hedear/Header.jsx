import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="Header logo" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY, ")}</p>
      </div>
      <div className="d-flex  p-4">
        <Button variant="danger">Danger</Button>
        <Marquee
          className="text-black fw-semibold fs-5"
          speed={50}
          pauseOnHover={true}
        >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">BanglaNews</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-semibold">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
              
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className="fw-semibold" variant="dark">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
