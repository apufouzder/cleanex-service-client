import React from 'react';
import { Col } from 'react-bootstrap';

const ServicesDetail = (props) => {
    const { title, imageURL, description, price } = props.service;
    return (
        <Col md={4} className="text-center">
            <div style={{ background: 'white', cursor: 'pointer' }} className="service-info p-4 shadow rounded">
                <img style={{ height: '50px' }} src={imageURL} alt="" />
                <h5 className="my-4">{title}</h5>
                <p className="text-secondary">{description}</p>
                <h3>${price}</h3>
            </div>
        </Col>
    );
};

export default ServicesDetail;