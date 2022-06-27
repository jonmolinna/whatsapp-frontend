import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
    messages: null,
    isLoading: false,
    error: null,
};

export const ContextMessages = createContext(INITIAL_STATE);

export const ContextProviderMessages = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <ContextMessages.Provider
            value={{
                messages: state.messages,
                isLoading: state.isLoading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </ContextMessages.Provider>
    )
};