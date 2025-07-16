import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const name = "hamed"
    const authInfo = {
        name
    }
    
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};
export default AuthProvider;