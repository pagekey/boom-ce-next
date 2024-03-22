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
    error: boolean
}

const defaultAuthInfo: AuthInfo = {
    user: undefined,
    loggedIn: false,
    loading: true,
    error: false,
};

const AuthContext = createContext<AuthInfo>(defaultAuthInfo);

export const AuthProvider = ({children}: PropsWithChildren<{}>) => {
    console.log('hello from auth provider')
    const request = trpc.user.getCurrentUser.useQuery();
    
    const getAuthInfo = (request: any): AuthInfo => {
        if (request.isLoading) {
            return defaultAuthInfo;
        } else if (request.isError) {
            return {...defaultAuthInfo, error: true, loading: false};
        } else if (!request.data) {
            return {...defaultAuthInfo, error: true, loading: false};
        } else {
            return {
                user: request.data,
                loggedIn: true,
                loading: false,
                error: false,
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
