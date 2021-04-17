import React, { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Review = () => {
    document.title = "CleaneX | Send Review"
    const [user] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            location: data.location,
            description: data.description,
            img: user.userImg
        }
        fetch('http://localhost:3040/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                console.log('server res review', res);
            })
    }

    return (
        <section style={{ overflow: 'hidden' }}>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} style={{ background: '#f4f7fc', height: '100vh' }}>
                    <h3 className="mt-4 ml-4"> <span className="text-brand2">Review</span></h3>
                    <div className="shadow-sm p-4 mt-5 mr-4 w-75"
                        style={{
                            background: 'white',
                            marginLeft: '20px',
                            padding: '17px',
                            borderRadius: '10px'
                        }}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" ref={register} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPrice">
                                <Form.Label>Your Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter location" name="location" ref={register} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Review Message</Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" ref={register} />
                            </Form.Group>

                            <input className="btn-style" type="submit" value="Submit" />
                        </form>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Review;