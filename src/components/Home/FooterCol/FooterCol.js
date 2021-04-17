import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <Col lg={3} md={6} xs={12}>
            <h5>{props.menuTitle}</h5>
            <ul className="px-0">
                {
                    props.menuItem.map(item => <li><Link style={{ lineHeight: '2' }} to={item.link}>{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </Col>
    );
};

export default FooterCol;