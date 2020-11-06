import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, GOOGLE_REGISTER_REQUEST, GOOGLE_REGISTER_SUCCESS, GOOGLE_REGISTER_FAILURE, FACEBOOK_REGISTER_REQUEST, FACEBOOK_REGISTER_SUCCESS, FACEBOOK_REGISTER_FAILURE, VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAILURE} from "./registerTypes"

const initialState = {
    loading: false,
    response: '',
    error: '',
    googleRegisterResponse: '',
    googleRegisterError: '',
    facebookRegisterResponse: '',
    facebookRegisterError: ''
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
                loading: true,
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
        
        case FACEBOOK_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                facebookRegisterError: '',
                facebookRegisterResponse: ''
            }


        case FACEBOOK_REGISTER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false,
                response: action.payload.response,
                error: '',
                tokenInfo: action.payload.tokenInfo
            }


        case FACEBOOK_REGISTER_FAILURE:
            return {
                loggedIn: false,
                loading: false,
                response: "",
                facebookRegisterError: action.payload,
                tokenInfo: {}
            }

        case VERIFY_TOKEN_REQUEST:
            return {
                ...state,
                loading: true
            }


        case VERIFY_TOKEN_SUCCESS:
            return {
                loading: false,
                response: action.payload,
                error: ''
            }


        case VERIFY_TOKEN_FAILURE:
            return {
                loading: false,
                response: "",
                error: action.payload
            }

        default:
            return state;
    }

}

export default reducer; 