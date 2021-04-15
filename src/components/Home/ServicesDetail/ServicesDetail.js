import React from 'react';
import { Col } from 'react-bootstrap';

const ServicesDetail = ({ service }) => {
    return (
        <Col md={4} className="text-center">
            <div style={{ background: 'white', cursor: 'pointer' }} className="service-info p-4 shadow rounded">
                <img style={{ height: '50px' }} src={service.img} alt="" />
                <h5 className="my-4">{service.name}</h5>
                <p className="text-secondary">{service.description}</p>
            </div>
        </Col>
    );
};

export default ServicesDetail;