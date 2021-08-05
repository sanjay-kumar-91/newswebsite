import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap"
const Menu = () => {
  return (
    <Row className='menu'>
      <Col>
        <Navbar variant="dark" expand='lg'>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand href="/">TV1 India News</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle area-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' >
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  )
}

export default Menu
