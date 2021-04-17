import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import BookingListCard from '../BookingListCard/BookingListCard';

const BookingList = () => {
    document.title = "CleaneX | Booking List"
    const [user] = useContext(UserContext);
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3040/bookings?email=` + user.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.email])


    return (
        <section style={{ overflow: 'hidden' }}>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} style={{ background: '#f4f7fc', height: '100vh' }}>
                    <h3 className="mt-4 ml-4">Booking <span className="text-brand2"> List</span></h3>
                    <Row className="mt-5 mx-5">
                        {bookings.length > 0
                            ? bookings.map(booking => <BookingListCard booking={booking} key={booking._id} />)
                            : <Spinner animation="border" variant="success" />
                        }
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default BookingList;