import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import happiness from '../../../images/happiness1.png';

const HappinessSection = () => {
    return (
        <section className="" style={{ background: '#45bfc0' }}>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={7}>
                        <h1 className="text-white mb-3">Your Happiness Guaranteed</h1>
                        <p className="text-white" style={{ lineHeight: '1.7em' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, odit pariatur atque nam minima perspiciatis tempora accusantium optio quae a laborum fugit libero sint temporibus nihil cupiditate totam eius facere asperiores unde, voluptatem, voluptate similique aperiam fugiat. Explicabo, esse culpa?</p>
                    </Col>
                    <Col md={5}>
                        <img src={happiness} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HappinessSection;