import {
    GET_ALL_USERS_START,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILURE,
    ADD_USER_TO_CHAT,
    CLEAR_USER_TO_CHAT,
    RESET_ALL_USERS,
} from './Types';

const Reducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_USERS_START: {
            return {
                ...state,
                users: null,
                isLoading: true,
                error: null,
            }
        }
        case GET_ALL_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                error: null,
            }
        }
        case GET_ALL_USERS_FAILURE: {
            return {
                ...state,
                users: null,
                isLoading: false,
                error: action.payload,
            }
        }
        case ADD_USER_TO_CHAT: {
            return {
                ...state,
                userChat: action.payload,
            }
        }
        case CLEAR_USER_TO_CHAT: {
            return {
                ...state,
                userChat: null,
            }
        }
        case RESET_ALL_USERS: {
            return {
                users: null,
                isLoading: false,
                error: null,
                userChat: null,
            }
        }
        default: {
            return state;
        }
    }
};

export default Reducer;