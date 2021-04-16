import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/home.png';
import allBooking from '../../../icon/allBooking.png';
import addService from '../../../icon/addService.png';
import makeAdmin from '../../../icon/makeAdmin.png';
import manage from '../../../icon/manage.png';
import cart from '../../../icon/cart.png';
import bag from '../../../icon/bag.png';
import review from '../../../icon/review.png';
import './Sidebar.css';

const Sidebar = () => {
    const [user, setUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log('isAdmin', isAdmin);
    useEffect(() => {
        fetch('http://localhost:3040/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div style={{ position: 'fixed', height: "100vh" }} className="sidebar px-4 d-flex flex-column justify-content-between">
            <ul className="list-unstyled">
                <Link to="/">
                    <img className="my-4" style={{ height: '50px' }} src={logo} alt="" />
                </Link>

                {isAdmin ?
                    <div>
                        <li className="mb-3 link-style" autoFocus>
                            <Link to="/allBookings" className="text-decoration-none text-muted" >
                                <span><img width="18px" src={allBooking} alt="" /> </span>
                                <span> All Booking List</span>
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/addService" className="text-decoration-none text-muted">
                                <span><img width="18px" src={addService} alt="" /> </span>
                                <span> Add Service</span>
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/makeAdmin" className="text-decoration-none text-muted">
                                <span><img width="18px" src={makeAdmin} alt="" /> </span>
                                <span> Make Admin</span>
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/manage-services" className="text-decoration-none text-muted">
                                <span><img width="18px" src={manage} alt="" /> </span>
                                <span> Manage Services</span>
                            </Link>
                        </li>
                    </div>

                    :
                    <div>
                        <li className="mb-3">
                            <Link to="/" className="text-decoration-none text-muted">
                                <span><img width="18px" src={cart} alt="" /> </span>
                                <span> Booking</span>
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/bookingList" className="text-decoration-none text-muted">
                                <span><img width="18px" src={bag} alt="" /> </span>
                                <span> Booking list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" className="text-decoration-none text-muted">
                                <span><img width="18px" src={review} alt="" /> </span>
                                <span> Review</span>
                            </Link>
                        </li>
                    </div>
                }
                <button className="btn-done mt-5">{user.name}</button>
            </ul>

        </div>
    );
};

export default Sidebar;