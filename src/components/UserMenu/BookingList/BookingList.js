import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import BookingListCard from '../BookingListCard/BookingListCard';

const BookingList = () => {
    const [user] = useContext(UserContext);
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3040/bookings?email=` + user.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.email])


    return (
        <section>
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