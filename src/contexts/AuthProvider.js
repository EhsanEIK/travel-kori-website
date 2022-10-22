import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const authInfo = {
        user,
        createUser,
        verifyEmail,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;