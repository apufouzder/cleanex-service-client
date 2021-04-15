import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '46f0ffc881fb748293fdf8b93dce6295');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log('res', res);
                setImageURL(res.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        fetch('http://localhost:3040/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                console.log('server res', res);
            })
    }

    return (
        <section>
            <div className="ml-5">
                <Link to="/"><h2>Hello</h2></Link>
            </div>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} style={{ background: '#f4f7fc' }}>
                    <h3 className="mb-4">Add Service</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Service Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" name="title" ref={register} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPrice">
                            <Form.Label>Add Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter price" name="price" ref={register} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" ref={register} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="file" name="exampleRequired" onChange={handleImageUpload} />
                        </Form.Group>

                        <input className="btn-style" type="submit" value="Add Product" />
                    </form>
                </Col>
            </Row>
        </section>
    );
};

export default AddService;