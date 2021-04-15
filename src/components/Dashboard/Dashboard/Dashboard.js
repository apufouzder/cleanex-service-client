import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10}>
                    Hello
                </Col>
            </Row>
        </section>
    );
};

export default Dashboard;