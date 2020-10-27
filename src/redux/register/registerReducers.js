import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, GOOGLE_REGISTER_REQUEST, GOOGLE_REGISTER_SUCCESS, GOOGLE_REGISTER_FAILURE} from "./registerTypes"

const initialState = {
    loading: false,
    response: '',
    error: '',
    googleRegisterResponse: '',
    googleRegisterError: '',
    googleRegisterLoading: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true
            }


        case REGISTER_USER_SUCCESS:
            return {
                loading: false,
                response: action.payload,
                error: ''
            }


        case REGISTER_USER_FAILURE:
            return {
                loading: false,
                response: "",
                error: action.payload
            }

        case GOOGLE_REGISTER_REQUEST:
            return {
                ...state,
                googleRegisterLoading: true,
                googleRegisterError: '',
                googleRegisterResponse: ''
            }


        case GOOGLE_REGISTER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false,
                response: action.payload.response,
                error: '',
                tokenInfo: action.payload.tokenInfo
            }


        case GOOGLE_REGISTER_FAILURE:
            return {
                loggedIn: false,
                loading: false,
                response: "",
                googleRegisterError: action.payload,
                tokenInfo: {}
            }

        default:
            return state;
    }

}

export default reducer; 