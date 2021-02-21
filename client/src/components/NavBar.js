import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Restaurant Finder</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <Form>
            <div className="input-group">
              <FormControl
                type="text"
                placeholder="Suchen ..."
                // style={{ marginRight: 10 }}
              />

              <Button variant="primary">Suchen</Button>
            </div>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
