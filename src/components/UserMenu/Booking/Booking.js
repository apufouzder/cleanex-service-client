import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../../ProcessPayment/ProcessPayment/ProcessPayment';
// import logo from '../../../images/home.png';

const Booking = () => {
    document.title = "CleaneX | Booking"
    const [user] = useContext(UserContext);
    const [service, setService] = useState([]);
    let { _id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://guarded-crag-91844.herokuapp.com/service/${_id}`)
            .then(res => res.json())
            .then(data => {
                setService(data[0])
            })
    }, [_id])

    const handlePayment = (cardInfo, cardId) => {
        const bookingDetail = {
            status: 'pending',
            ...user,
            cardInfo,
            cardId,
            title: service.title,
            description: service.description,
            imageURL: service.imageURL,
            price: service.price,
            bookingTime: new Date()
        }
        console.log(bookingDetail);

        fetch('https://guarded-crag-91844.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingDetail)
        })
            .then(res => res.json())
            .then(data => {
                data && history.replace('/bookingList')
            })
    }

    return (
        <section style={{ overflow: 'hidden' }}>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} style={{ background: '#f4f7fc', height: '100vh' }}>
                    <ProcessPayment service={service} handlePayment={handlePayment} />
                </Col>
            </Row>
        </section>
    );
};

export default Booking;