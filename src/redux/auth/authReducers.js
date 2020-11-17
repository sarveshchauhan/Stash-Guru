import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE, FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILURE, GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, CLEAR_FORGOT_PASSWORD_MESSAGE, CLEAR_RESET_PASSWORD_MESSAGE } from "./authTypes"

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
    islogin: false,

    forgotPasswordLoading: false,
    forgotPasswordSuccess: "",
    forgotPasswordError: "",


    resetPasswordLoading: false,
    resetPasswordSuccess: "",
    resetPasswordError: ""
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

        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                forgotPasswordLoading: true,
                forgotPasswordSuccess: "",
                forgotPasswordError: ""
            }

        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                forgotPasswordLoading: false,
                forgotPasswordSuccess: action.payload.message
            }

        case FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                forgotPasswordLoading: false,
                forgotPasswordError: action.payload
            }

        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                resetPasswordLoading: true,
                resetPasswordError: "",
                resetPasswordSuccess: ""
            }

        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordLoading: false,
                resetPasswordSuccess: action.payload.message
            }

        case RESET_PASSWORD_FAILURE:
            return {
                ...state,
                resetPasswordLoading: false,
                resetPasswordError: action.payload
            }

        case CLEAR_FORGOT_PASSWORD_MESSAGE:
            return {
                ...state,
                forgotPasswordError: "",
                forgotPasswordSuccess: ""
            }

        case CLEAR_RESET_PASSWORD_MESSAGE:
            return {
                ...state,
                resetPasswordError: "",
                resetPasswordSuccess: ""
            }

        default:
            return state;
    }

}

export default reducer; 