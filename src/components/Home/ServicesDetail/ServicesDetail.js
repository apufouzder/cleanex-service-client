import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const ServicesDetail = (props) => {
    const [user, setUser] = useContext(UserContext);
    const { title, imageURL, description, price, _id } = props.service;
    const history = useHistory();

    const handleBooking = () => {
        history.push(`/booking/${_id}`)
        // setUser({ ...user, service: props.service })
        // console.log({ ...user, service: props.service });

    }

    return (
        <Col md={4} className="text-center">
            <div onClick={() => handleBooking(_id)} style={{ background: 'white', cursor: 'pointer' }} className="service-info p-4 shadow rounded">
                <img style={{ height: '50px' }} src={imageURL} alt="" />
                <h5 className="my-4">{title}</h5>
                <p className="text-secondary">{description}</p>
                <h3>${price}</h3>
            </div>
        </Col>
    );
};

export default ServicesDetail;