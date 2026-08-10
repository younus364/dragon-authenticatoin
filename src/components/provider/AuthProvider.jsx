import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, SetUser] = useState(null)
    console.log(user)
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signOutUser =()=>{
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                SetUser(currentUser)
            }
            else {
                console.log("User Not sign ")
            }
        })
        return () => {

            unsubscrib()
        }
    }, [])
    const authInfo = {
        user,
        creatUser,
        loginUser,
        signOutUser,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;