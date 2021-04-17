import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';
import logo from '../../../images/logo.png'

const contact = [
]
const ourAddress = [

]
const ourLink = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Services", link: "/" },
    { name: "Pages", link: "/" },
    { name: "News", link: "/" },
    { name: "Contact Us", link: "/" }
]
const services = [
    { name: "Residentiel Cleaning", link: "/" },
    { name: "Commercial Cleaning", link: "/" },
    { name: "Event Cleanup", link: "/" },
    { name: "Window Cleaning", link: "/" },
    { name: "Outdoor Furniture", link: "/" },
    { name: "Laundry Service", link: "/" }
]

const Footer = () => {
    return (
        <footer style={{ background: '#fff4d6' }} className="footer-section pt-5">
            <Container>
                <Row className="custom-style">
                    <FooterCol key={1} menuTitle={<img src={logo} alt="" />} menuItem={contact}>

                        <div>
                            <p>+91 555 965 9658</p>
                            <p>services@gmail.com</p>
                            <p>info@gmail.com</p>
                            <p>1257/Plot No. 59, 15th Phase</p>
                        </div>

                    </FooterCol>
                    <FooterCol key={2} menuTitle={'Our Link'} menuItem={ourLink} />
                    <FooterCol key={3} menuTitle={'Services'} menuItem={services} />
                    <FooterCol key={4} menuTitle={'Subscribe'} menuItem={ourAddress}>

                        <div className="d-flex subscribe">
                            <input type="text" />
                            <button className="btn-style">Send</button>
                        </div>
                    </FooterCol>
                    <div className="copyRight m-auto pt-3">
                        <p>CopyRight {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;