import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../../ProcessPayment/ProcessPayment/ProcessPayment';
import logo from '../../../images/home.png';

const Booking = () => {
    const [user, setUser] = useContext(UserContext);
    const [service, setService] = useState([]);
    const { title, price } = service;
    let { _id } = useParams();
    console.log(service);
    useEffect(() => {
        fetch(`http://localhost:3040/service/${_id}`)
            .then(res => res.json())
            .then(data => {
                setService(data[0])
            })
    }, [_id])

    const handlePayment = (event) => {
        const bookingDetail = {
            ...user,
            title: event.title,
            description: service.description,
            imageURL: service.imageURL,
            price: event.price,
            bookingTime: new Date()
        }

        fetch('http://localhost:3040/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
            })
    }

    return (
        <section>
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