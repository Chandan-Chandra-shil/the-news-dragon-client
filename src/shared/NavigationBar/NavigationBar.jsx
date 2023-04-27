import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container className="mb-5">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">BanglaNews</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-semibold d-flex justify-content-center align-items-center">
              <Link className="text-decoration-none" to="/category/0">Home</Link>

              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              {user && <FaUserCircle className="fs-3"></FaUserCircle>}

              {user ? (
                <Button className="fw-semibold" variant="dark">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="fw-semibold" variant="dark">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
