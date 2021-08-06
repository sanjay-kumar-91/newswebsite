import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Top from "./components/Top"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Slider from "./components/Slider"
import Main from "./components/Main"
import Working from "./components/Working"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"
const App = () => {

    return (
        <Router>
            <Top />
            <Header />
            <Menu />
            {/* <Slider /> */}
            <main >
                <Container fluid='sm'>
                    <Route path='/' component={Working} />
                    <Route path='/main' component={Main} />

                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;