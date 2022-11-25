import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hook/useAuth';
import { setUser } from '../store/slices/userSlice';
import FormComponent from './FormComponent';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function SignIn() {
  const dispach = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)

  };

  return (
    <FormComponent 
        title="sign in"
        handleSubmit={handleSubmit}
    />
  );
}
