import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {InputGroup,Form,Button} from 'react-bootstrap'
import CustumModal from '../CustumModal/CustumModal'
function CustumNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Genre le domaine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Actualités</Nav.Link>
            <Nav.Link href="/Politique">Politique</Nav.Link>
            <Nav.Link href="/Economie">Economie</Nav.Link>
            <Nav.Link href="/Culture">Culture</Nav.Link>
            <Nav.Link href="/Sport">Sport</Nav.Link>
            <Nav.Link href="/Art">Art</Nav.Link>
           
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <CustumModal/>
        </Nav>
        
        
      </Container>
      {/* <Container>
      <Button variant="info">Info</Button>
      </Container> */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="à chercher"
          aria-label="Article à chercher"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Chercher
        </Button>
      </InputGroup>
      
    </Navbar>
    
  );
}

export default CustumNavbar;
