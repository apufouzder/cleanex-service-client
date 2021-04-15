import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import femaleImg from '../../../images/femaleImg.png';

const HeaderMain = () => {
    return (
        <main className="mt-5">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={6}>
                        <h5 className="text-brand">Welcome to CleanEX</h5>
                        <h1 className="py-3 display-4">The Best House <br /> <span className="text-brand2">Cleaning Service</span> </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dignissimos eos. Harum ut commodi eum.</p>
                        <button className="btn-style">Read More</button>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" src={femaleImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default HeaderMain;