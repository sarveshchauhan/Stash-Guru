import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from "./authTypes"

const initialState = {
    loggedIn: false,
    loading:false,
    response: '',
    error: '',
    tokenInfo: {}
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

        default:
            return state;
    }

}

export default reducer; 