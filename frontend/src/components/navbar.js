import React from 'react'
import {Navbar,Nav} from 'bootstrap'


function navbarMine(){
    return [
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Dengue Virus Predictor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Model</Nav.Link>
                <Nav.Link href="#link">Prediction</Nav.Link>
                <Nav.Link href="#link">Author</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    ]
}

export default navbarMine;