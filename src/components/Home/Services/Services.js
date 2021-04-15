import React, { useEffect, useState } from 'react';
import homeIcon from '../../../images/home.png';
import windowIcon from '../../../images/windows.png';
import sofaIcon from '../../../images/sofa.png';
import { Container, Row } from 'react-bootstrap';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

// const servicesData = [
//     {
//         name: 'Commercial Cleaning',
//         img: homeIcon,
//         price: 50,
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, consectetur!'
//     },
//     {
//         name: 'Window Cleaning',
//         img: windowIcon,
//         price: 30,
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, consectetur!'
//     },
//     {
//         name: 'Sofa Cleaning',
//         img: sofaIcon,
//         price: 10,
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, consectetur!'
//     }
// ]



const Services = () => {
    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3040/service')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])

    return (
        <section className="services py-3 mt-5">
            <Container>
                <div className="text-center">
                    <h5 className="text-brand mt-5">Services</h5>
                    <h2 className="mb-3 mt-4">Professional Care And Services</h2>
                    <p className="text-secondary mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia amet laborum odio non. <br /> debitis est aspernatur dignissimos ipsum!</p>
                </div>
                <div className="d-flex justify-content-center">
                    <Row className="">
                        {
                            servicesData.map(service => <ServicesDetail service={service} key={service.name} />)
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Services;