import React from 'react'
import { Container } from 'react-bootstrap'
const Marquee = () => {
    return (
        <Container>
            <marquee scrollamount="5" loop="infinite">
                <b>Hello, I am a StackOverflow user. And I Code the Web.</b>
                <b>Hello, I am a StackOverflow user. And I Code the Web.</b>
                <b>Hello, I am a StackOverflow user. And I Code the Web.</b>
            </marquee>
        </Container>
    )
}


export default Marquee
