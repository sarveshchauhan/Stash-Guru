import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE, FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILURE, GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS} from "./authTypes"

const initialState = {
    loggedIn: false,
    loading: false,
    response: '',
    error: '',
    tokenInfo: {},
    googleLoginResponse: '',
    googleLoginError: '',
    facebookLoginResponse: '',
    facebookLoginError: '',
    authResponse: {},
    islogin: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: '',
                islogin: false
            }


        case LOGIN_USER_SUCCESS:
            return {
                loggedIn: true,
                loading: false,
                response: action.payload.response,
                error: '',
                tokenInfo: action.payload.tokenInfo,
                islogin: true
            }

        case LOGIN_USER_FAILURE:
            return {
                loggedIn: false,
                loading: false,
                response: "",
                error: action.payload,
                tokenInfo: {},
                islogin: false
            }
        
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_USER_SUCCESS:
            return {
                islogin: true,
                authResponse: action.payload,
                loading: false
            }

        case GET_USER_FAILURE:
            return {
                islogin: false,
                authResponse: {},
                loading: false
            }    

        case GOOGLE_LOGIN_REQUEST:
            return {
                ...state,
                googleLoginError: '',
                googleLoginResponse: '',
                loading: true
            }


        case GOOGLE_LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                response: action.payload.response,
                error: '',
                tokenInfo: action.payload.tokenInfo,
                loading: false
            }


        case GOOGLE_LOGIN_FAILURE:
            return {
                loggedIn: false,
                response: "",
                googleLoginError: action.payload,
                tokenInfo: {},
                loading: false
            }

        case FACEBOOK_LOGIN_REQUEST:
            return {
                ...state,
                facebookLoginError: '',
                facebookLoginResponse: '',
                loading: true
            }


        case FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                response: action.payload.response,
                error: '',
                tokenInfo: action.payload.tokenInfo,
                loading: false
            }


        case FACEBOOK_LOGIN_FAILURE:
            return {
                loggedIn: false,
                response: "",
                facebookLoginError: action.payload,
                tokenInfo: {},
                loading: false
            }

        default:
            return state;
    }

}

export default reducer; 