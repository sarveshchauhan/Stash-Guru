import axios from 'axios'
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE, FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILURE} from "./authTypes"
import { set_login_token } from "../../helpers/tokenHelpers";
import { config } from '../../config/config';

const loginUserRequest = () => {
    return {
        type: LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = response => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: response
    }
}

const loginUserFailure = error => {
    return {
        type: LOGIN_USER_FAILURE,
        payload: error
    }
}

export const googleLoginRequest = () => {
    return {
        type: GOOGLE_LOGIN_REQUEST
    }
}

const googleLoginSuccess = response => {
    return {
        type: GOOGLE_LOGIN_SUCCESS,
        payload: response
    }
}

const googleLoginFailure = error => {
    return {
        type: GOOGLE_LOGIN_FAILURE,
        payload: error
    }
}

export const facebookLoginRequest = () => {
    return {
        type: FACEBOOK_LOGIN_REQUEST
    }
}

const facebookLoginSuccess = response => {
    return {
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: response
    }
}

const facebookLoginFailure = error => {
    return {
        type: FACEBOOK_LOGIN_FAILURE,
        payload: error
    }
}

export const loginUser = (user) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(loginUserRequest())
        await axios.post(`${config.apiUrl}/users/login`, user, requestConfig)
        .then(response => {
            const loginResponse = response.data;
            if (loginResponse.status) {

                const loginData = {
                    response: "User logged in successfully!",
                    tokenInfo: loginResponse.token
                };

                dispatch(loginUserSuccess(loginData));

                set_login_token(JSON.stringify(loginResponse.token));

                const query = new URLSearchParams(window.location.search);

                if (query.get('redirect_url')) {
                    window.location.href = query.get('redirect_url');
                }
                else {
                    window.location.href = '/';
                }
            }
            else {
                dispatch(loginUserFailure(loginResponse.message));        
            }

        }).catch(error => {
            const errorMsg = error.message;
            dispatch(loginUserFailure(errorMsg));

        });
    }

}

export const googleLogin = (token) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return  (dispatch) => {
        dispatch(googleLoginRequest());
        axios.post(`${config.apiUrl}/users/googleLogin`, { googleToken: token }, requestConfig)
        .then(response => {

            const loginResponse = response.data;

            if (loginResponse.status) {

                const response = {
                    response: "User logged in successfully!",
                    tokenInfo: loginResponse.token
                };

                dispatch(googleLoginSuccess(response));
                
                set_login_token(JSON.stringify(loginResponse.token));

                const query = new URLSearchParams(window.location.search);

                if (query.get('redirect_url')) {
                    window.location.href = query.get('redirect_url');
                }
                else {
                    window.location.href = '/';
                }

            }
            else {
                dispatch(googleLoginFailure(loginResponse.errors));
            }

        }).catch(error => {
            const errorMsg = error.message;
            dispatch(googleLoginFailure(errorMsg));
        });
    }

}

export const loginWithFaceBook = (data) => {
    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return  (dispatch) => {
        dispatch(facebookLoginRequest());
        axios.post(`${config.apiUrl}/users/facebookLogin`, { fbdata: data }, requestConfig)
        .then(response => {

            const loginResponse = response.data;

            if (loginResponse.status) {

                const response = {
                    response: "User logged in successfully!",
                    tokenInfo: loginResponse.token
                };

                dispatch(facebookLoginSuccess(response));
                
                set_login_token(JSON.stringify(loginResponse.token));

                const query = new URLSearchParams(window.location.search);

                if (query.get('redirect_url')) {
                    window.location.href = query.get('redirect_url');
                }
                else {
                    window.location.href = '/';
                }

            }
            else {
                dispatch(facebookLoginFailure(loginResponse.errors));
            }

        }).catch(error => {
            const errorMsg = error.message;
            dispatch(facebookLoginFailure(errorMsg));
        });
    }
}