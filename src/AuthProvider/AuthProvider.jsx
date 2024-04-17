import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    console.log(user);
    const [loading, setLoading] = useState(true);
    
    
    
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const updateUsersProfile = (name, image) =>{
       
       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })

    }


    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const logout = () =>{
        setUser(null)
       return signOut(auth)
    }


    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) =>{
          
                setUser(user)
                setLoading(false)
            
        });
        return () => unsubscribe();
    },[])

    const allValues ={
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        updateUsersProfile,
        loading,
        setUser
        
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