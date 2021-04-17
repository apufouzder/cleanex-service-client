import React from 'react';
import { Col } from 'react-bootstrap';
import './BookingListCard.css';

const BookingListCard = (props) => {
    const { title, imageURL, description, status } = props.booking;
    return (
        <Col sm={4} className="mb-3">
            <div style={{ background: 'white' }} className="service p-4 shadow-sm rounded">
                <div>
                    <img className="mb-3" width="50px" src={imageURL} alt="" />
                    {status.toLowerCase() === 'done' && <p className="ml-5 btn-done">{status}</p>}
                    {status.toLowerCase() === 'pending' && <p className="ml-5 btn-pending">{status}</p>}
                    {status.toLowerCase() === 'on going' && <p className="ml-5 btn-onGoing">{status}</p>}
                </div>
                <h5>{title}</h5>
                <p className="text-muted">{description}</p>
            </div>
        </Col>
    );
};

export default BookingListCard;