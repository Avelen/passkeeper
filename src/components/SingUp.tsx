import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/userSlice';
import FormComponent from './FormComponent';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from '@mui/material';


export default function SignUp() {
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

      createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
          dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.refreshToken,
          }));
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
        title="sign up"
        handleSubmit={handleSubmit}
      />
    </>
  );
}
