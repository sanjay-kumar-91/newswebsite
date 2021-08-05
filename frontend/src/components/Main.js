import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import ImageCarousel from "./ImageCarousel";

const Example = () => { };

const Main = () => {
  return (
    <main>

      <Row className='screen'>
        <Col className='left' sm={3}>
          <Button variant="danger" onClick={Example}>
            Click
          </Button>
        </Col>
        <Col className='middle' sm={6}>
          <ImageCarousel />
        </Col>
        <Col className='right' sm={3}>Right</Col>
      </Row>

    </main>
  );
};

export default Main;
