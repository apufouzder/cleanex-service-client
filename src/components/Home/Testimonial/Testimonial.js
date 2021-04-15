import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Testimonial = (props) => {
    const { name, img, from, quote } = props.testimonial;

    return (
        <Col md={4}>
            <Card className="shadow-sm border-0">
                <Card.Header className="border-0 bg-white d-flex align-items-center">
                    <img style={{ marginRight: '10px' }} width="60" src={img} alt="" />
                    <div>
                        <h6>{name}</h6>
                        <p>{from}</p>
                    </div>
                </Card.Header>
                <Card.Body className="">
                    <p>{quote}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Testimonial;