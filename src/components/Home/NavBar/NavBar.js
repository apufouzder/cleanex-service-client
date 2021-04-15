import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand style={{ color: 'black' }} as={Link} to="/"><h4>CleanEX</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className="mr-4" style={{ color: 'black' }} as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black' }} to="/">About us</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black' }} to="/">Projects</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black' }} to="/">Contact</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black' }} as={Link} to="/dashboard">Admin</Nav.Link>
                        <Nav.Link style={{ color: 'black' }} as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;