import React from 'react'

const Marquee = () => {
    return (
        <div>
            <marquee scrollamount="5" loop="infinite">
                <b>Hello, I am a StackOverflow user. And I Code the Web.</b>
                <b>Hello, I am a StackOverflow user. And I Code the Web.</b>
                <b>Hello, I am a StackOverflow user. And I Code the Web.</b>
            </marquee>
        </div>
    )
}

export default Marquee
