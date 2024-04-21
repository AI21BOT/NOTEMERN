import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        bg="primary"
        expanded="lg"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/">NOTE</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/mynote">NOTE</Link>
              </Nav.Link>
              <NavDropdown title="AI" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">PROFILE</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
