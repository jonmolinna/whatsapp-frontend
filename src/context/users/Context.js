import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
    users: null,
    isLoading: false,
    error: null,
    isIdMessage: null,
};

export const ContextUsers = createContext(INITIAL_STATE);

export const ContextProviderUsers = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <ContextUsers.Provider
            value={{
                users: state.users,
                isLoading: state.isLoading,
                error: state.error,
                isIdMessage: state.isIdMessage,
                dispatch,
            }}
        >
            {children}
        </ContextUsers.Provider>
    )
};