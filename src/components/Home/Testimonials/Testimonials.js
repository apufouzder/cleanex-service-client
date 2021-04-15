import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import { Container, Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! consectetur adipisicing elit.',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! consectetur adipisicing elit.',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! consectetur adipisicing elit.',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]


const Testimonials = () => {
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
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;