import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);

    const logIn = (newUser, callback) => {
        setUser(newUser);
        callback();
    }

    const logOut = (callback) => {
        setUser(null);
        callback();
    }

    const value = {user, logIn, logOut};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}