import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE, FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILURE, GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, CLEAR_FORGOT_PASSWORD_MESSAGE, CLEAR_RESET_PASSWORD_MESSAGE, SAVE_PROFILE_PIC_REQUEST, SAVE_PROFILE_PIC_SUCCESS, SAVE_PROFILE_PIC_FAILURE, SAVE_PROFILE_REQUEST, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAILURE, TOGGLE_PROFILE_MODAL, GET_COUNTRY_CODE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from "./authTypes"

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
    resetPasswordError: "",

    saveProfilePicLoading: false,
    saveProfilePicResponse: "",
    saveProfilePicError: "",


    saveProfileLoading: false,
    svaeProfileResponse: "",
    saveProfileError: "",

    showProfileEditModal: false,

    deleteAccountError: "",
    deleteAccountResponse: "",


    countryCodes: []
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
                ...state,
                loggedIn: true,
                loading: false,
                response: action.payload.response,
                error: '',
                tokenInfo: action.payload.tokenInfo,
                islogin: true
            }

        case LOGIN_USER_FAILURE:
            return {
                ...state,
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
                ...state,
                islogin: true,
                authResponse: action.payload,
                loading: false
            }

        case GET_USER_FAILURE:
            return {
                ...state,
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
                ...state,
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
                ...state,
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

        case SAVE_PROFILE_PIC_REQUEST:
            return {
                ...state,
                saveProfilePicLoading: true,
                saveProfilePicError: "",
                saveProfilePicResponse: ""
            }


        case SAVE_PROFILE_PIC_SUCCESS:
            return {
                ...state,
                saveProfilePicLoading: false,
                saveProfilePicResponse: action.payload
            }

        case SAVE_PROFILE_PIC_FAILURE:
            return {
                ...state,
                saveProfilePicLoading: false,
                saveProfilePicError: action.payload
            }

        case SAVE_PROFILE_REQUEST:
            return {
                ...state,
                saveProfileLoading: true
            }

        case SAVE_PROFILE_SUCCESS:
            return {
                ...state,
                saveProfileLoading: false,
                svaeProfileResponse: action.payload
            }

        case SAVE_PROFILE_FAILURE:
            return {
                ...state,
                saveProfileLoading: false,
                saveProfileError: action.payload
            }

        case TOGGLE_PROFILE_MODAL:
            return {
                ...state,
                showProfileEditModal: action.payload
            }

        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteAccountResponse: action.payload
            }

        case DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                deleteAccountFailure: action.payload
            }

            


        default:
            return state;
    }

}

export default reducer; 