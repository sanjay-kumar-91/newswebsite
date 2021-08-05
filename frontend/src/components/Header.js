import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

const Header = () => {
    return (
        <header
            style={{
                backgroundImage: `url("./images/bnn.jpg")`,
                backgroundSize: 'cover',
                width: '100%',
                height: '100%'

            }}>
            <Container>
                <Row>
                    <Col md={2}>
                        <Image src="./images/logo.png" alt="Linking Error" rounded />
                    </Col>
                    <Col>
                        <h1 className='text-center mt-4 tvcol'>TV1 India News</h1>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
