import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const contact = [
    { name: "+91 555 965 9658", link: "/" },
    { name: "info@gmail.com", link: "/" },
    { name: "services@gmail.com", link: "/" },
    { name: "1257/Plot No. 59, 15th Phase", link: "/" },
    { name: "Check Up", link: "/" },
]
const ourAddress = [
    { name: "New York - 101010 Hudson", link: "/" },
    { name: "Yards", link: "/" },

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
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Services", link: "/" },
    { name: "Pages", link: "/" },
    { name: "News", link: "/" },
    { name: "Contact Us", link: "/" }
]

const Footer = () => {
    return (
        <footer style={{ background: '#fff4d6' }} className="footer-section pt-5">
            <Container>
                <Row>
                    <FooterCol key={1} menuTitle={'CleanEX'} menuItem={contact} />
                    <FooterCol key={2} menuTitle={'Our Link'} menuItem={ourLink} />
                    <FooterCol key={3} menuTitle={'Services'} menuItem={services} />
                    <FooterCol key={4} menuTitle={'Subscribe'} menuItem={ourAddress}>
                        <ul className="list-inline">
                            <li className="">
                                <a href="/">FB</a>
                            </li>
                            <li>
                                <a href="/">FB</a>
                            </li>
                            <li>
                                <a href="/">FB</a>
                            </li>
                        </ul>
                        <div>
                            <input type="text" />
                            <button>Click</button>
                        </div>
                    </FooterCol>
                    <div className="copyRight text-center">
                        <p>CopyRight {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;