import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const NavBar = () => {
    const [user] = useContext(UserContext);
    const [getAdmin, setGetAdmin] = useState([])

    useEffect(() => {
        fetch('http://localhost:3040/getAdmin')
            .then(res => res.json())
            .then(data => setGetAdmin(data))
    }, [])
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand style={{ color: 'black' }} as={Link} to="/"><h4>CleanEX</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav className="align-items-center">
                        <Nav.Link className="mr-4" style={{ color: 'black' }} as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black' }} to="/">About us</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black' }} to="/">Projects</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black' }} to="/">Contact</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black' }} as={Link} to={getAdmin ? '/makeAdmin' : '/bookingList'} >Admin</Nav.Link>

                        {user.name || user.email ?
                            <Nav.Link className="login-user" style={{ color: 'black' }} as={Link} to="/login">
                                <img style={{ width: '34px', borderRadius: '50%' }} src={user.userImg} alt="" />
                            </Nav.Link>
                            : <Nav.Link className="btn-style" style={{ color: 'black' }} as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;