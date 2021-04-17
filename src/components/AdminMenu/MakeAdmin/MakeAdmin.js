import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const addAdmin = {
            email: data.email
        }
        fetch('https://guarded-crag-91844.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addAdmin)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Email send successfully!')
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
                    <h4 className="mt-4 ml-4">Make <span className="text-brand2">Admin</span></h4>
                    <div className="shadow-sm p-4 mt-5 mr-4 w-50"
                        style={{

                            background: 'white',
                            marginLeft: '20px',
                            padding: '17px',
                            borderRadius: '10px'
                        }}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name="email" ref={register} required />
                            </Form.Group>

                            <input className="btn-style" type="submit" value="Submit" />
                        </form>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default MakeAdmin;