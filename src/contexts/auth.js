import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    async function login(user) {
        setUser(user);
    }

    const isLoggedIn = () => {
        return user ? true : false;
    }

    const value = {
        signed: Boolean(user),
        user,
        login,
        isLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;