import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
//const dateFormat = require("dateformat");
import moment from 'moment'
// const day = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
// const date = new Date().getDay()
const Top = () => {
    return (

        <Row className='top'>
            <Container>
                <Row>

                    <Col className="ml-3 mt-2">
                        {/* {day[date]} */}
                        {moment().format('ddd  DD MMM yyyy')}
                    </Col>
                    <Col>
                        <Image className="topPhoto mr-1" src="./images/fb.png" alt="Linking Error" fluid rounded />
                        <Image className="topPhoto mr-1" src="./images/yt.png" alt="Linking Error" fluid rounded />
                        <Image className="topPhoto mr-1" src="./images/trr.png" alt="Linking Error" fluid rounded />
                    </Col>
                </Row>
            </Container>
        </Row>


    )
}

export default Top
