import {
    GET_ALL_MESSAGES_BY_USER_START,
    GET_ALL_MESSAGES_BY_USER_SUCCESS,
    GET_ALL_MESSAGES_BY_USER_FAILURE,
    ADD_MESSAGE_BY_USER_SUCCESS,
    ADD_MESSAGE_BY_USER_FAILURE,
    RESET_MESSAGES_BY_USER,
} from './Types';

const Reducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES_BY_USER_START: {
            return {
                messages: null,
                isLoading: true,
                error: null,
            }
        }
        case GET_ALL_MESSAGES_BY_USER_SUCCESS: {
            return {
                messages: action.payload,
                isLoading: false,
                error: null,
            }
        }
        case GET_ALL_MESSAGES_BY_USER_FAILURE: {
            return {
                messages: null,
                isLoading: false,
                error: action.payload,
            }
        }
        case ADD_MESSAGE_BY_USER_SUCCESS: {
            const message = action.payload;
            return {
                ...state,
                messages: [message, ...state.messages]
            }
        }
        case ADD_MESSAGE_BY_USER_FAILURE: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case RESET_MESSAGES_BY_USER: {
            return {
                messages: null,
                isLoading: false,
                error: null,
            }
        }
        default: {
            return state
        }
    }
};

export default Reducer;