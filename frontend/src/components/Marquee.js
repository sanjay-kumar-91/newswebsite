import React from 'react'
import { Container } from 'react-bootstrap'
const Marquee = () => {
    return (
        <Container>
            <marquee scrollamount="5" loop="infinite">
                <b></b>
            </marquee>
        </Container>
    )
}


export default Marquee
