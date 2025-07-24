import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.inite";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(user)
    // Authentication 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        const provider =  new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unSubscribe;
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        googleLogin,
        logOut
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};
export default AuthProvider;