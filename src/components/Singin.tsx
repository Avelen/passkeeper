import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/userSlice';
import FormComponent from './FormComponent';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert, Box } from '@mui/material';


export default function SignIn() {
    const [ isLoginError, setIsLoginError ] = useState(false);
    const [ loginErrorMessage, setLoginErrorMessage ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
            }));
            localStorage.setItem('userToken', user.refreshToken);
            localStorage.setItem('userId', user.uid);
            localStorage.setItem('userEmail', user.email);
            navigate('/');
        })
        .catch((error) => {
            setLoginErrorMessage(error.message)
            setIsLoginError(true)
        });

    };

    return (
        <>  
            {isLoginError &&
                <Alert 
                    severity="error"
                    sx={{
                        position: 'fixed',
                        right: '10px',
                        top: '10px',
                    }}
                >
                    {loginErrorMessage}
                </Alert>
            }
            <FormComponent 
                title="Sign in"
                handleSubmit={handleSubmit}
            />
            <Box 
                sx={{
                    maxWidth: 400,
                    width: '100%',
                    margin: 'auto',
                }}
            >
                <NavLink to="/signup" className="create-link">
                    Create new account
                </NavLink>
            </Box>
        </>
    );
}
