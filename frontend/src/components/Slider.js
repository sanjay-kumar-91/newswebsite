import React from 'react'
import { Container,Row, Col, Button, Image } from 'react-bootstrap'
import Marquee from './Marquee';
const Slider = () => {
    return (
        <Container>
            <Row className='slider'>
                <Col md={3}>
                    <Button variant='danger' className='ml-3'>
                        <span>Breacking News </span>
                        <Image src="./images/pro.gif" style={{ height: '18px', width: '18px' }} />
                    </Button>
                </Col>
                <Col>
                    <Marquee />
                </Col>
            </Row>
        </Container>
    )
}

export default Slider
