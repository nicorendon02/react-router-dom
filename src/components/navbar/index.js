import React from "react";
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

function header(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Curriculum Vitae</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/interests">interests</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default header;