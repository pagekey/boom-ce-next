// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#auth-context
//   Source:  docs/architecture/user/index.md
import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';


export interface AuthInfo {
    user: any;
    isLoggedIn: () => boolean;
    loading: boolean;
}

const defaultAuthInfo: AuthInfo = {
    user: null,
    isLoggedIn: () => false,
    loading: true,
};

const AuthContext = createContext<AuthInfo>(defaultAuthInfo);

export const AuthProvider = ({children}: PropsWithChildren<{}>) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const fetchCurrentUser = async () => {
        setUser('fetched fake user')
        setLoading(false);
        // try {
        //     const response = await fetch('/user/current');
        //     if (response.ok) {
        //         const userData = await response.json();
        //         setUser(userData);
        //     } else {
        //         setUser(null);
        //     }
        // } catch (error) {
        //     console.error('Error fetching current user:', error);
        //     setUser(null);
        // } finally {
        //     setLoading(false);
        // }
    };
    
    useEffect(() => {
        fetchCurrentUser();
    }, []);
    
    const isLoggedIn = () => {
        return !!user;
    };
    
    const authContextValue: AuthInfo = {
        user,
        isLoggedIn,
        loading,
    };
    
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

