import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/home.png';

const Sidebar = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div style={{ position: 'fixed', height: "100vh" }} className="sidebar px-4 d-flex flex-column justify-content-between">
            <ul className="list-unstyled">
                <Link to="/">
                    <img className="my-4" style={{ height: '50px' }} src={logo} alt="" />
                </Link>

                <li className="mb-3">
                    <Link to="/allBookings" className="text-decoration-none">
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
                <button className="btn-done mt-5">{user.name}</button>
            </ul>

        </div>
    );
};

export default Sidebar;