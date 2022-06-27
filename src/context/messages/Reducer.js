import {
    GET_ALL_MESSAGES_BY_USER_START,
    GET_ALL_MESSAGES_BY_USER_SUCCESS,
    GET_ALL_MESSAGES_BY_USER_FAILURE
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
        default: {
            return state
        }
    }
};

export default Reducer;