import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './Types';

const Reducer = (state, action) => {
    switch (action.type) {
        case LOGIN_START: {
            return {
                user: null,
                isLoading: true,
                error: false,
            };
        }
        case LOGIN_SUCCESS: {
            return {
                user: action.payload,
                isLoading: false,
                error: false,
            };
        }
        case LOGIN_FAILURE: {
            return {
                user: null,
                isLoading: false,
                error: true,
            };
        }
        case LOGOUT: {
            return {
                user: null,
                isLoading: false,
                error: false,
            }
        }
        default: {
            return state
        }
    }
};

export default Reducer;