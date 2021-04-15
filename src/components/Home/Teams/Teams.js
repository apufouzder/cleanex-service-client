import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import teamImg from '../../../images/team.png';

const Teams = () => {
    return (
        <section className="py-5 mt-5">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={5}>
                        <img src={teamImg} className="img-fluid" alt="teamImg" />
                    </Col>
                    <Col md={7}>
                        <h1 className="mb-4">We Are Best Cleaning <br /> Cimpany <span className="text-brand2">Since 2002</span></h1>
                        <p style={{ lineHeight: '1.9em', fontSize: '1.2em' }} className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid hic nobis doloribus ipsa ex dolor est itaque voluptatem temporibus pariatur ad quaerat quia, reiciendis exercitationem quam cupiditate rem fugit expedita eligendi distinctio! Accusamus harum cupiditate porro saepe modi voluptate quidem.</p>
                        <button className="btn-style">Read More</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Teams;