import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'

const Working = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ marginTop: '10vh', color: 'crimson', width: '90%' }}>Websit is under maintenance...
                            <Spinner animation="grow" />
                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Working
