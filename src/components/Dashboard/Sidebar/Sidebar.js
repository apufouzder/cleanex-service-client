import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ position: 'fixed', height: "100vh" }} className="sidebar py-5 px-4 d-flex flex-column justify-content-between">

            <ul className="list-unstyled">
                <li className="mb-3">
                    <Link to="/orderList" className="text-decoration-none">
                        <span>Order List</span>
                    </Link>
                </li>
                <li className="mb-3">
                    <Link to="/addService" className="text-decoration-none">
                        <span>Add Service</span>
                    </Link>
                </li>
                <li className="mb-3">
                    <Link to="/makeAdmin" className="text-decoration-none">
                        <span>Make Admin</span>
                    </Link>
                </li>
                <li className="mb-3">
                    <Link to="/manage-services" className="text-decoration-none">
                        <span>Manage Services</span>
                    </Link>
                </li>

                <li className="mb-3">
                    <Link to="/booking" className="text-decoration-none">
                        <span>Booking</span>
                    </Link>
                </li>
                <li className="mb-3">
                    <Link to="/bookingList" className="text-decoration-none">
                        <span>Booking list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-decoration-none">
                        <span>Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;