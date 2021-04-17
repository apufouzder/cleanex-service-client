import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AllBookingListTable = ({ booking }) => {
    const [pending, setPending] = useState(booking.status.toLowerCase() === 'pending')

    const handlerStatus = (e) => {
        setPending(!pending)
        fetch('http://localhost:3040/updateStatus', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.target.value, id: booking._id })
        })
            .then(res => res.json())
            .then(data => {
                console.log('update status', data);
            })
    }
    return (
        <>
            <tr>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.title}</td>
                <td>{booking.cardInfo.brand}</td>
                <td>
                    {pending &&
                        <Form.Control as="select" onChange={handlerStatus}>
                            <option selected style={{ color: '#FF4545' }}>Pending</option>
                            <option style={{ color: '#009444' }}>Done</option>
                            <option style={{ color: '#ffbd3e' }}>On going</option>
                        </Form.Control>
                    }
                    {!pending &&
                        <Form.Control as="select" onChange={handlerStatus}>
                            <option style={{ color: '#FF4545' }}>Pending</option>
                            <option selected style={{ color: '#009444' }}>Done</option>
                            <option style={{ color: '#ffbd3e' }}>On going</option>
                        </Form.Control>
                    }

                </td>
            </tr>
        </>
    );
};

export default AllBookingListTable;