import React from "react"
import Top from "./components/Top"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Slider from "./components/Slider"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"
const App = () => {
    return (
        <>
            <Top />
            <Header />
            <Menu />
            <Slider />
            <main >
                <Container>
                    <Main />

                </Container>
            </main>
            <Footer />
        </>
    );
}

export default App;