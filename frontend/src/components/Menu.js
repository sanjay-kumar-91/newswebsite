import React from 'react'
import { Row, Col, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap"
const Menu = () => {
  return (
    <>
      <Row className='menu'>
        <Col>
          <Navbar variant="dark">
            <Navbar.Brand href="/">TV1 India News</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </Col>
      </Row>
    </>
  )
}

export default Menu
