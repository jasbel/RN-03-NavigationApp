import React, { createContext, useReducer } from 'react';
import { Text, View } from 'react-native';
import { authReducer } from './AuthReducer';

//Definir como luce, que informacio tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado Inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

//Lo usresmo para decirle a react como luce qy que exporn el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
    logout: () => void;
}

//Crear el contexto
export const AuthContext =  createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout'})
    }

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            changeUsername,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}