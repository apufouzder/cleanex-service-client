import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://guarded-crag-91844.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="py-5 my-5">
            <Container>
                <div className="text-center mb-5">
                    <h5 className="text-brand mb-3">TESTIMONIAL</h5>
                    <h1>Customers Love Us For <span className="text-brand2">Our Work</span></h1>
                </div>
                <div>
                    <Row>
                        {
                            testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id} />)
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;