import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ManageServicesTable from '../ManageServicesTable/ManageServicesTable';
import logo from '../../../images/home.png';
import { UserContext } from '../../../App';

const ManageServices = () => {
    const [user, setUser] = useContext(UserContext);
    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3040/services')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:3040/delete/${id}`, {
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