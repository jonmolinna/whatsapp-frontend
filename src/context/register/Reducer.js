import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from './Types';

const Reducer = (state, action) => {
    switch (action.type) {
        case REGISTER_START: {
            return {
                registered: false,
                isLoading: true,
                error: null,
            };
        }
        case REGISTER_SUCCESS: {
            return {
                registered: true,
                isLoading: false,
                error: null,
            }
        }
        case REGISTER_FAILURE: {
            return {
                registered: false,
                isLoading: false,
                error: action.payload,
            }
        }
        default: {
            return state;
        }
    }
};

export default Reducer;