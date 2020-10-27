import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE} from "./authTypes"

const initialState = {
    loggedIn: false,
    loading:false,
    response: '',
    error: '',
    tokenInfo: {},
    googleLoginResponse: '',
    googleLoginError: '',
    googleLoginLoading: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }


        case LOGIN_USER_SUCCESS:
            return {
                loggedIn: true,
                loading: false,
                response: action.payload.response,
                error: '',
                tokenInfo: action.payload.tokenInfo
            }

        case LOGIN_USER_FAILURE:
            return {
                loggedIn: false,
                loading: false,
                response: "",
                error: action.payload,
                tokenInfo: {}
            }

            case GOOGLE_LOGIN_REQUEST:
                return {
                    ...state,
                    googleLoginLoading: true,
                    googleLoginError: '',
                    googleLoginResponse: ''
                }
    
    
            case GOOGLE_LOGIN_SUCCESS:
                return {
                    ...state,
                    loggedIn: true,
                    googleLoginLoading: false,
                    response: action.payload.response,
                    error: '',
                    tokenInfo: action.payload.tokenInfo
                }
    
    
            case GOOGLE_LOGIN_FAILURE:
                return {
                    loggedIn: false,
                    loading: false,
                    response: "",
                    googleLoginError: action.payload,
                    tokenInfo: {}
                }

        default:
            return state;
    }

}

export default reducer; 