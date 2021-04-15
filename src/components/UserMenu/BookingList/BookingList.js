import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import logo from '../../../images/home.png';
import BookingListCard from '../BookingListCard/BookingListCard';

const BookingList = () => {
    const [user, setUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3040/bookings?email=` + user.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.email])


    return (
        <section>
            <div className="ml-5 d-flex align-items-center">
                <Link to="/">
                    <img width="40px" src={logo} alt="" />
                </Link>
                <p className="m-auto">{user.name}</p>
            </div>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} style={{ background: '#f4f7fc', height: '100vh' }}>
                    <Row className="mt-5 mx-5">
                        {
                            bookings.map(booking => <BookingListCard booking={booking} key={booking._id} />)
                        }
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default BookingList;