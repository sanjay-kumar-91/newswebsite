import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Example = () => {};

const Main = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <Button variant="danger" onClick={Example}>
              Click
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
