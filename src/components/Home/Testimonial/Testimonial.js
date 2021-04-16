import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Testimonial = (props) => {
    const { name, img, location, description } = props.testimonial;

    return (
        <Col md={4}>
            <Card className="shadow-sm border-0">
                <Card.Header className="border-0 bg-white d-flex align-items-center">
                    <img style={{ marginRight: '10px', borderRadius: '50%' }} width="60" src={img} alt="" />
                    <div>
                        <h6>{name}</h6>
                        <p>{location}</p>
                    </div>
                </Card.Header>
                <Card.Body className="">
                    <p>{description}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Testimonial;