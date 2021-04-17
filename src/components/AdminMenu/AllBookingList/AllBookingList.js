import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllBookingListTable from '../AllBookingListTable/AllBookingListTable';

const AllBookingList = () => {
    document.title = "CleaneX | All Booking List"
    const [allBooking, setAllBooking] = useState([])

    useEffect(() => {
        fetch('http://localhost:3040/allBookings')
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [])

    return (
        <section style={{ overflow: 'hidden' }}>
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
                        <table className="table table-borderless">
                            <thead style={{ background: '#f4f7fc' }}>
                                <tr>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email ID</th>
                                    <th className="text-secondary" scope="col">Service</th>
                                    <th className="text-secondary" scope="col">Pay With</th>
                                    <th className="text-secondary" scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allBooking.length > 0
                                    ? allBooking.map(booking => <AllBookingListTable booking={booking} key={booking._id} />)
                                    : <Spinner animation="border" variant="success" />
                                }
                            </tbody>
                        </table>

                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default AllBookingList;