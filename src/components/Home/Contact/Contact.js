import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import contactImg from '../../../images/contactImg.png';

const Contact = () => {
    return (
        <section style={{ background: '#f3fcfb' }} className="py-5">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={5}>
                        <img src={contactImg} className="img-fluid" alt="" />
                    </Col>
                    <Col md={7} className="mb-4">
                        <h2>Get A <span className="text-brand2">Quote</span></h2>
                        <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate incidunt dolor similique. Consequatur, sit quo.</p>
                        <Form>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <button className="btn-style">Submit</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;