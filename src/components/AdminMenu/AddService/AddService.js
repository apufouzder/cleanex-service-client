import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import UploadIcon from '../../../icon/upload.png';
import './AddService.css';

const AddService = () => {
    document.title = "CleaneX | Add-Service"
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
        fetch('https://guarded-crag-91844.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                console.log('server res add service', res);
            })
    }

    return (
        <section style={{ overflowX: 'hidden' }}>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10} style={{ background: '#f4f7fc', height: '100vh' }}>
                    <h3 className="mt-4 ml-4">Add <span className="text-brand2">Service</span></h3>
                    <div className="shadow-sm p-4 mt-5 mr-4 w-75"
                        style={{
                            background: 'white',
                            marginLeft: '20px',
                            padding: '17px',
                            borderRadius: '10px'
                        }}>
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
                                <Form.Control as="textarea" rows={2} name="description" ref={register} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Add Image</Form.Label>
                                <div className='file-upload'
                                    style={{ background: `url(${UploadIcon}) no-repeat`, backgroundSize: '30px 30px' }}>
                                    <input type="file" name="exampleRequired" onChange={handleImageUpload} />
                                    <b style={{ color: '#6c4bf4', margin: '0' }}>Upload image</b>
                                </div>
                            </Form.Group>

                            <input className="btn-style" type="submit" value="Add Product" />
                        </form>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default AddService;