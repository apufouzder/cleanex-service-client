import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useContext(UserContext);
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
                console.log(signInUser);
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Login;