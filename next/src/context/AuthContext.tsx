// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#auth-context
//   Source:  docs/architecture/user/index.md
import { trpc } from '@/util/trpc';
import { User } from '@prisma/client';
import { createContext, useContext, PropsWithChildren } from 'react';


export interface AuthInfo {
    user?: User
    loggedIn: boolean
    loading: boolean
}

const defaultAuthInfo: AuthInfo = {
    user: undefined,
    loggedIn: false,
    loading: true,
};

const AuthContext = createContext<AuthInfo>(defaultAuthInfo);

export const AuthProvider = ({children}: PropsWithChildren<{}>) => {
    const request = trpc.user.getCurrentUser.useQuery();
    
    const getAuthInfo = (request: any): AuthInfo => {
        if (request.isLoading) {
            return defaultAuthInfo;
        } else if (request.isError || !request.data || !request.data.user || !request.data.loggedIn) {
            return {...defaultAuthInfo, loading: false};
        } else {
            return {
                user: request.data.user,
                loggedIn: true,
                loading: false,
            }
        }
    };
    
    const authContextValue: AuthInfo = getAuthInfo(request);
    
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
