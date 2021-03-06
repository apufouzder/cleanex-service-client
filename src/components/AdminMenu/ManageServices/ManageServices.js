import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ManageServicesTable from '../ManageServicesTable/ManageServicesTable';

const ManageServices = () => {
    document.title = "CleaneX | Manage Services"
    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        fetch('https://guarded-crag-91844.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`https://guarded-crag-91844.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const filterBookings = servicesData.filter(data => data._id !== id)
                    setServicesData(filterBookings)
                }
            })
    }
    return (
        <section style={{ overflow: 'hidden' }}>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} style={{ background: '#f4f7fc', height: '100vh' }}>
                    <h3 className="mt-4 ml-4">Manage <span className="text-brand2">Services</span></h3>
                    <div className="shadow-sm p-4 mt-5 mr-4"
                        style={{
                            background: 'white',
                            marginLeft: '20px',
                            padding: '17px',
                            borderRadius: '10px'
                        }}>
                        <ManageServicesTable servicesData={servicesData} handleDelete={handleDelete} />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default ManageServices;