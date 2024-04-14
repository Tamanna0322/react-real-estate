import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    console.log(user);
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }
        })
    },[])

    const allValues ={
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};



AuthProvider.propTypes ={
    children: PropTypes.object
}

export default AuthProvider;