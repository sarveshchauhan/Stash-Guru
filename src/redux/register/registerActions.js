import axios from 'axios';
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, GOOGLE_REGISTER_REQUEST, GOOGLE_REGISTER_SUCCESS, GOOGLE_REGISTER_FAILURE, FACEBOOK_REGISTER_REQUEST, FACEBOOK_REGISTER_SUCCESS, FACEBOOK_REGISTER_FAILURE, VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAILURE } from "./registerTypes";
import { config } from '../../config/config';
import { set_login_token } from "../../helpers/tokenHelpers";

const registerUserRequest = () => {
    return {
        type: REGISTER_USER_REQUEST
    }
}

const registerUserSuccess = response => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: response
    }
}

const registerUserFailure = error => {
    return {
        type: REGISTER_USER_FAILURE,
        payload: error
    }
}

const googleRegisterRequest = () => {
    return {
        type: GOOGLE_REGISTER_REQUEST
    }
}

const googleRegisterSuccess = response => {
    return {
        type: GOOGLE_REGISTER_SUCCESS,
        payload: response
    }
}

const googleRegisterFailure = error => {
    return {
        type: GOOGLE_REGISTER_FAILURE,
        payload: error
    }
}

const facebookRegisterRequest = () => {
    return {
        type: FACEBOOK_REGISTER_REQUEST
    }
}

const facebookRegisterSuccess = response => {
    return {
        type: FACEBOOK_REGISTER_SUCCESS,
        payload: response
    }
}

const facebookRegisterFailure = error => {
    return {
        type: FACEBOOK_REGISTER_FAILURE,
        payload: error
    }
}

const verifyTokenRequest = () => {
    return {
        type: VERIFY_TOKEN_REQUEST
    }
}

const verifyTokenSuccess = response => {
    return {
        type: VERIFY_TOKEN_SUCCESS,
        payload: response
    }
}

const verifyTokenFailure = error => {
    return {
        type: VERIFY_TOKEN_FAILURE,
        payload: error
    }
}

export const registerUser = (user) => {



    const query = new URLSearchParams(window.location.search);

    if (query.get('redirect_url')) {
        user.redirect_url = encodeURIComponent(decodeURIComponent(query.get('redirect_url')));
    }
    else {
        user.redirect_url = encodeURIComponent(`${config.appUrl}/dashboard`);
    }


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(registerUserRequest());

        try {
            const response = await axios.post(`${config.apiUrl}/front/users/register`, user, requestConfig);
            const registerResponse = response.data;

            if (registerResponse.status) {

                dispatch(registerUserSuccess(registerResponse.message));

            }
            else {
                dispatch(registerUserFailure(registerResponse.message));
            }

        }
        catch (error) {
            const errorMsg = error.message;
            dispatch(registerUserFailure(errorMsg));
        }
    }

}

export const googleRegisterUser = (token) => {
    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return (dispatch) => {
        dispatch(googleRegisterRequest());
        axios.post(`${config.apiUrl}/front/users/googleLogin`, { googleToken: token }, requestConfig)
            .then(response => {

                const loginResponse = response.data;

                if (loginResponse.status) {

                    const response = {
                        response: "User logged in successfully!",
                        tokenInfo: loginResponse.token
                    };

                    dispatch(googleRegisterSuccess(response));

                    set_login_token(JSON.stringify(loginResponse.token));

                    const query = new URLSearchParams(window.location.search);

                    if (query.get('redirect_url')) {
                        window.location.href = query.get('redirect_url');
                    }
                    else {
                        window.location.href = '/dashboard';
                    }

                }
                else {
                    dispatch(googleRegisterFailure(loginResponse.errors));
                }

            }).catch(error => {
                // console.log("Come in error " + error);

                const errorMsg = error.message;
                dispatch(googleRegisterFailure(errorMsg));

            });

    }
}

export const facebookRegisterUser = (data) => {
    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return (dispatch) => {
        dispatch(facebookRegisterRequest());
        axios.post(`${config.apiUrl}/front/users/facebookLogin`, { fbdata: data }, requestConfig)
            .then(response => {

                const loginResponse = response.data;

                if (loginResponse.status) {

                    const response = {
                        response: "User logged in successfully!",
                        tokenInfo: loginResponse.token
                    };

                    dispatch(facebookRegisterSuccess(response));

                    set_login_token(JSON.stringify(loginResponse.token));

                    const query = new URLSearchParams(window.location.search);

                    if (query.get('redirect_url')) {
                        window.location.href = query.get('redirect_url');
                    }
                    else {
                        window.location.href = '/dashboard';
                    }

                }
                else {
                    dispatch(facebookRegisterFailure(loginResponse.errors));
                }

            }).catch(error => {
                // console.log("Come in error " + error);

                const errorMsg = error.message;
                dispatch(facebookRegisterFailure(errorMsg));

            });

    }
}

export const verifyToken = (token) => {
    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(verifyTokenRequest());
        axios.post(`${config.apiUrl}/front/users/verifyEmailToken`, { token: token }, requestConfig)
            .then(response => {

                const loginResponse = response.data;



                if (loginResponse.status) {

                    // const response = {
                    //     response: "User logged in successfully!",
                    //     tokenInfo: loginResponse.token
                    // };



                    set_login_token(JSON.stringify(loginResponse.token));
                    localStorage.setItem("userEmail", loginResponse.email);

                    const query = new URLSearchParams(window.location.search);


                    if (query.get('redirect_url')) {
                        window.location.href = query.get('redirect_url');
                        // window.location.href = '/dashboard';
                    }
                    else {
                        window.location.href = '/dashboard';
                    }

                }
                else {
                    dispatch(verifyTokenFailure(loginResponse.message));
                }

            }).catch(error => {
                // console.log("Come in error " + error);

                const errorMsg = error.message;
                dispatch(verifyTokenFailure(errorMsg));

            });
    }
}