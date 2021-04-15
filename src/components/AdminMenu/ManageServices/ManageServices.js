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
    console.log(servicesData);
    useEffect(() => {
        fetch('http://localhost:3040/services')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])
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
                    <div className="shadow-sm p-4 mt-5 mr-4"
                        style={{
                            background: 'white',
                            marginLeft: '20px',
                            padding: '17px',
                            borderRadius: '10px'
                        }}>

                        <h3>Manage Services</h3>
                        <ManageServicesTable servicesData={servicesData} />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default ManageServices;