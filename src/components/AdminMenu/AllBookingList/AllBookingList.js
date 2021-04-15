import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllBookingListTable from '../AllBookingListTable/AllBookingListTable';

const AllBookingList = () => {
    const [allBooking, setAllBooking] = useState([])

    useEffect(() => {
        fetch('http://localhost:3040/allBookings')
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [])
    return (
        <section>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} style={{ background: '#f4f7fc', height: '100vh' }}>
                    <div className="shadow-sm p-4 mt-5 mr-4"
                        style={{
                            background: 'white',
                            marginLeft: '20px',
                            padding: '17px',
                            borderRadius: '10px'
                        }}>

                        <h3>All Booking List</h3>
                        <AllBookingListTable allBooking={allBooking} />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default AllBookingList;