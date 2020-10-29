import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE, FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILURE, GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS} from "./authTypes"

const initialState = {
    loggedIn: false,
    loading:false,
    response: '',
    error: '',
    tokenInfo: {},
    googleLoginResponse: '',
    googleLoginError: '',
    googleLoginLoading: false,
    facebookLoginResponse: '',
    facebookLoginError: '',
    facebookLoginLoading: false,
    authResponse: {},
    islogin: false
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
        
        case GET_USER_REQUEST:
            return {
                ...state
            }

        case GET_USER_SUCCESS:
            return {
                islogin: true,
                authResponse: action.payload
            }

        case GET_USER_FAILURE:
            return {
                islogin: false,
                authResponse: {}
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

        case FACEBOOK_LOGIN_REQUEST:
            return {
                ...state,
                facebookLoginLoading: true,
                facebookLoginError: '',
                facebookLoginResponse: ''
            }


        case FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                facebookLoginLoading: false,
                response: action.payload.response,
                error: '',
                tokenInfo: action.payload.tokenInfo
            }


        case FACEBOOK_LOGIN_FAILURE:
            return {
                loggedIn: false,
                loading: false,
                response: "",
                facebookLoginError: action.payload,
                tokenInfo: {}
            }

        default:
            return state;
    }

}

export default reducer; 