import { createContext , useState , useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [Authenticated, setAuthenticated] = useState(false);

    const login = () =>setAuthenticated(true);

    const signup = () =>setAuthenticated(true);

    const logout = () =>setAuthenticated(false);

    return(
        <AuthContext.Provider value={{Authenticated, login, signup, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = ()=>useContext(AuthContext); 
