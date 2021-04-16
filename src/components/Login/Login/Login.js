import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';
import { Col, Container, Row } from 'react-bootstrap';
import loginBg from '../../../images/team.png';
import google from '../../../icon/google.png';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signInUser = { name: displayName, email, userImg: photoURL };
                setUser(signInUser)
                history.replace(from);
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    return (
        <Container>
            <Row className="align-items-center" style={{ height: "100vh" }}>
                <Col md={6}>
                    <div style={{ width: '500px', boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)' }} className="p-5 rounded">

                        <h3 className="text-center mb-5">
                            {newUser ? 'Create an account' : 'Login'}
                        </h3>
                        <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="">Email</label>
                            <input type="text" name="email" className="form-control" />
                        </div>

                        <div className="form-group mb-2">
                            <label className="mb-1" htmlFor="">Password</label>
                            <input type="password" name="password" className="form-control" />
                        </div>

                        {newUser &&
                            <div className="form-group mb-3">
                                <label className="mb-1" htmlFor="">Confirm Password</label>
                                <input type="password" name="conPassword" className="form-control" />
                            </div>
                        }

                        <div className="form-group">
                            <button onClick={handleGoogleSignIn} className="btn-style form-control">
                                {newUser
                                    ? 'Create an account'
                                    : ' Login'
                                }
                            </button>
                        </div>
                        <p className="text-center">
                            {newUser
                                ? "Already have an account "
                                : "Don't have an account? "
                            }
                            <a href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setNewUser(!newUser)
                                }}>
                                {newUser ? 'Login' : 'Create an account'}
                            </a>
                        </p>

                        <div>
                            <button
                                style={{
                                    outline: 'none',
                                    width: '100%',
                                    borderRadius: '25px',
                                    border: '1px solid gray',
                                    background: 'white',
                                    fontSize: '17px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    marginBottom: '12px'
                                }}
                                onClick={handleGoogleSignIn}>
                                <span style={{ marginRight: '60px' }}>
                                    <img height="34px" src={google} alt="" />
                                </span>
                                <span>Continue with Google</span>
                            </button>
                        </div>

                    </div>
                </Col>

                <Col md={6} className="align-self-center d-none d-md-block">
                    <img className="img-fluid" src={loginBg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;