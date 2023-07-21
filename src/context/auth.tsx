import React, { createContext, useState, useEffect } from 'react';
import { ILogin } from '../types/data';

export interface ISignIn {
    setToken: (data: ILogin) => void;
    handleLogout: () => void;
    authTokens:ILogin | null;
}

export const AuthContext = createContext<ISignIn | null>(null);

type Props = {
    children: JSX.Element | JSX.Element[];
}

export function UseAuth({ children }: Props) {
    const [authTokens, setAuthTokens] = useState<ILogin | null>(null)

    const setToken = (data: ILogin) => {
        console.log(data)
        sessionStorage.setItem("token", JSON.stringify(data));
        setAuthTokens(data);
    };

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        setAuthTokens(null);
    };

    useEffect(() => {
        const sd = sessionStorage.getItem("token");
        if (sd) {
            const ud = JSON.parse(sd);
            setAuthTokens(ud)
        }
    }, [setAuthTokens])

    return (
        <AuthContext.Provider value={{ setToken, handleLogout, authTokens }}>
            {children}
        </AuthContext.Provider>
    )
};