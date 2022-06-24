import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    error: false,
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