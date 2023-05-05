import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        signOut(auth);
    }

    const popupRegister = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('loggedUser', loggedUser)
            setUser(loggedUser);
        })

        return () => {
            unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        popupRegister,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;