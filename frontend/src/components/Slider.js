import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import Marquee from './Marquee';
const Slider = () => {
    return (
        <div>
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
        </div>
    )
}

export default Slider
