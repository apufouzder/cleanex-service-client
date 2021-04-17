import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';

const NavBar = () => {
    const [user] = useContext(UserContext);

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand style={{ color: 'black' }} as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav className="align-items-center">
                        <Nav.Link className="mr-4" style={{ color: 'black', fontSize: '19px' }} as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black', fontSize: '19px' }} to="/">About us</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black', fontSize: '19px' }} to="/">Services</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black', fontSize: '19px' }} to="/">Contact</Nav.Link>
                        <Nav.Link className="mr-4" style={{ color: 'black', fontSize: '19px' }} as={Link} to="/dashboard">Admin</Nav.Link>

                        {user.name || user.email ?
                            <Nav.Link className="login-user" style={{ color: 'black' }} as={Link} to="/login">
                                <img style={{ width: '34px', borderRadius: '50%' }} src={user.userImg} alt="" />
                            </Nav.Link>
                            : <Nav.Link className="btn-style" style={{ color: 'black', fontSize: '19px' }} as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;