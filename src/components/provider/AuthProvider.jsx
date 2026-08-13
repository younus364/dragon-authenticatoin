import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, SetUser] = useState(null)
    const [loading,setLoading] = useState(true)
    console.log(loading,user)
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
          
                SetUser(currentUser)
                setLoading(false)
          
        })
        return () => {

            unsubscrib()
        }
    }, [])


    const userUpdateProfile =(update)=>{
      return  updateProfile(auth.currentUser,update)
    }







    const authInfo = {
        user,
        creatUser,
        loginUser,
        signOutUser,
        loading,
        userUpdateProfile
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;