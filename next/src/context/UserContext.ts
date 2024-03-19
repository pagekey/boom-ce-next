import { createContext, useState } from 'react'

const UserContext = createContext({ currentUser: undefined });

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    const login = (user) => {
        setCurrentUser(user);
    };

    const logout = () => {
        setCurrentUser(undefined);
    };

    return (
        <UserContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);
