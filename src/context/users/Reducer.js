import {
    GET_ALL_USERS_START,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILURE,
    ADD_USER_ID,
    CLEAR_USER_ID
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
        case ADD_USER_ID: {
            return {
                ...state,
                isIdMessage: action.payload,
            }
        }
        case CLEAR_USER_ID: {
            return {
                ...state,
                isIdMessage: null,
            }
        }
        default: {
            return state;
        }
    }
};

export default Reducer;