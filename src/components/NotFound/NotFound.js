import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import NotFoundPage from '../../images/not.gif';

const NotFound = () => {
    return (
        <Container className="text-center">
            <div>
                <Link to="/">
                    <img className="my-4" src={logo} alt="" />
                </Link>
            </div>
            <img src={NotFoundPage} className="img-fluid" alt="" />
        </Container>
    );
};

export default NotFound;