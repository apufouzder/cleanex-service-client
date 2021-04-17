import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import dashboard from '../../../images/manageinfo.gif';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useContext(UserContext);
    return (

        <section style={{ overflowX: 'hidden' }}>

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col className="dashboard-col" md={10} style={{ background: '#f4f7fc', height: '100vh' }}>
                    <h1 className="mt-4 ml-4">Welcome! <span className="text-brand2">{user.name}</span></h1>
                    <div className="shadow-sm p-4 mt-5 mr-4 w-60"
                        style={{

                            background: 'white',
                            marginLeft: '20px',
                            padding: '17px',
                            borderRadius: '10px'
                        }}>
                        <h3 className="text-muted">Your Dashboard Here. Manage your information</h3>
                        <img src={dashboard} className="img-fluid" alt="" />

                    </div>

                </Col>
            </Row>
        </section>
    );
};

export default Dashboard;