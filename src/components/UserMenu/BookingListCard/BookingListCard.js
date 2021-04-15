import React from 'react';
import { Col, Row } from 'react-bootstrap';

const BookingListCard = (props) => {
    const { title, price, imageURL, description } = props.booking;
    return (
        <Col sm={4} className="mb-3">
            <div style={{ background: 'white' }} className="service p-4 shadow-sm rounded">
                <div>
                    <img className="mb-3" width="50px" src={imageURL} alt="" />
                    <button className="ml-5">Done</button>
                </div>
                <h5>{title}</h5>
                <p className="text-muted">{description}</p>
            </div>
        </Col>
    );
};

export default BookingListCard;