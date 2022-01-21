import React, { createContext, useReducer, useContext } from 'react';

const MessageStateContext = createContext();
const MessageDispatchContext = createContext();

let message = null;

const messageReducer = (state, action) => {
    switch(action.type) {
        case 'CHAT_MESSAGE':
            return {
                ...state,
                message: action.payload,
            }
        case 'REMOVE_MESSAGE':
            return {
                ...state,
                message: null,
            }
        default:
            return state
    }
};

export const MessageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(messageReducer, { message });

    return (
        <MessageDispatchContext.Provider value={dispatch}>
            <MessageStateContext.Provider value={state}>
                { children }
            </MessageStateContext.Provider>
        </MessageDispatchContext.Provider>
    )
};

export const useMessageState = () => useContext(MessageStateContext);
export const useMessageDispatch = () => useContext(MessageDispatchContext);