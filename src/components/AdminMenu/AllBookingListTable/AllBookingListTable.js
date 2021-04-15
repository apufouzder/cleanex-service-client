import React from 'react';

const AllBookingListTable = ({ allBooking }) => {

    return (
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
                {
                    allBooking.map((booking, index) =>

                        <tr>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.title}</td>
                            <td>Credit Card</td>
                            <td>pending</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllBookingListTable;