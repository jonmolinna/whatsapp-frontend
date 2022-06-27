import jwtDecode from 'jwt-decode';
import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    error: false,
};

const token = localStorage.getItem("whatsapp-token");

if (token) {
    const decodedToken = jwtDecode(token);
    const expiresAt = new Date(decodedToken.exp * 1000);

    if (new Date() > expiresAt) {
        localStorage.removeItem("whatsapp-token");
    } else {
        INITIAL_STATE.user = decodedToken;
    }
};

export const ContextAuth = createContext(INITIAL_STATE);

export const ContextProviderAuth = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <ContextAuth.Provider
            value={{
                user: state.user,
                isLoading: state.isLoading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </ContextAuth.Provider>
    )
};