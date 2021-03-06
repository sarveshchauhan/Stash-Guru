import axios from 'axios'
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE, FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILURE, GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, FORGOT_PASSWORD_SUCCESS, CLEAR_FORGOT_PASSWORD_MESSAGE, CLEAR_RESET_PASSWORD_MESSAGE, SAVE_PROFILE_PIC_REQUEST, SAVE_PROFILE_PIC_SUCCESS, SAVE_PROFILE_PIC_FAILURE, SAVE_PROFILE_REQUEST, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAILURE, TOGGLE_PROFILE_MODAL, GET_COUNTRY_CODE, PROFILE_CHECK_SUCCESS, PROIFLE_CHECK_REQUEST, PROFILE_CHECK_FAILURE, DELETE_USER_REQUEST, DELETE_USER_FAILURE, DELETE_USER_SUCCESS } from "./authTypes"
import { set_login_token, remove_login_token, validateClientToken } from "../../helpers/tokenHelpers";
import { config } from '../../config/config';
import Swal from 'sweetalert2';


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

const getUserRequest = () => {
    return {
        type: GET_USER_REQUEST
    }
}

const getUserFailure = error => {
    return {
        type: GET_USER_FAILURE
    }
}

const getUserSuccess = response => {
    return {
        type: GET_USER_SUCCESS,
        payload: response
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
        await axios.post(`${config.apiUrl}/front/users/login`, user, requestConfig)
            .then(response => {
                const loginResponse = response.data;
                if (loginResponse.status) {

                    const loginData = {
                        response: "User logged in successfully!",
                        tokenInfo: loginResponse.token
                    };

                    dispatch(loginUserSuccess(loginData));

                    set_login_token(JSON.stringify(loginResponse.token));
                    localStorage.setItem("userEmail", user.email);

                    const query = new URLSearchParams(window.location.search);

                    if (query.get('redirect_url')) {
                        window.location.href = query.get('redirect_url');
                    }
                    else {
                        window.location.href = '/dashboard';
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

    return (dispatch) => {
        dispatch(googleLoginRequest());
        axios.post(`${config.apiUrl}/front/users/googleLogin`, { googleToken: token }, requestConfig)
            .then(response => {

                const loginResponse = response.data;

                if (loginResponse.status) {

                    const response = {
                        response: "User logged in successfully!",
                        tokenInfo: loginResponse.token
                    };

                    dispatch(googleLoginSuccess(response));

                    set_login_token(JSON.stringify(loginResponse.token));

                    localStorage.setItem("userEmail", loginResponse.email);

                    const query = new URLSearchParams(window.location.search);

                    if (query.get('redirect_url')) {
                        window.location.href = query.get('redirect_url');
                    }
                    else {
                        window.location.href = '/dashboard';
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

    return (dispatch) => {
        dispatch(facebookLoginRequest());
        axios.post(`${config.apiUrl}/front/users/facebookLogin`, { fbdata: data }, requestConfig)
            .then(response => {

                const loginResponse = response.data;

                if (loginResponse.status) {

                    const response = {
                        response: "User logged in successfully!",
                        tokenInfo: loginResponse.token
                    };

                    dispatch(facebookLoginSuccess(response));

                    set_login_token(JSON.stringify(loginResponse.token));
                    localStorage.setItem("userEmail", loginResponse.email);

                    const query = new URLSearchParams(window.location.search);

                    if (query.get('redirect_url')) {
                        window.location.href = query.get('redirect_url');
                    }
                    else {
                        window.location.href = '/dashboard';
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

export const getUsers = () => {
    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(getUserRequest())
        if (localStorage.getItem('stashGuruToken')) {
            await axios.post(`${config.apiUrl}/front/users/details`, { token: localStorage.getItem('stashGuruToken').replace(/["']/g, "") }, requestConfig)
                .then(response => {

                    const usersResponse = response.data;

                    if (usersResponse.status) {

                        const response = {
                            users: { id: usersResponse.users.u_id, name: usersResponse.users.u_name, profile_pic: `${usersResponse.users.u_pic}`, email: usersResponse.users.u_email, mobile: usersResponse.users.u_mobile, about: usersResponse.users.u_about, verify: usersResponse.users.u_verify, referral: usersResponse.users.u_refferal, country_code: usersResponse.users.u_country_code, u_account_email: usersResponse.users.u_account_email, u_account_sms: usersResponse.users.u_account_sms, u_marketing_email: usersResponse.users.u_marketing_email, u_marketing_sms: usersResponse.users.u_marketing_sms, u_reminder_email: usersResponse.users.u_reminder_email, u_reminder_sms: usersResponse.users.u_reminder_sms }
                        };

                        dispatch(getUserSuccess(response));

                    }
                    else {
                        remove_login_token();
                        dispatch(getUserFailure());
                    }

                }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(getUserFailure(errorMsg));
                });
        }
        else {
            remove_login_token();
            dispatch(getUserFailure());
        }
    }
}

export const logoutUser = () => {
    remove_login_token();
    window.location.href = '/';
}



const forgotPasswordRequest = () => {

    return {
        type: FORGOT_PASSWORD_REQUEST
    }

}


const forgotPasswordSuccess = (response) => {

    return {
        type: FORGOT_PASSWORD_SUCCESS,
        payload: response
    }

}


const forgotPasswordFailure = (response) => {

    return {
        type: FORGOT_PASSWORD_FAILURE,
        payload: response
    }

}

export const clearForgotPasswordMessage = () => {

    return {
        type: CLEAR_FORGOT_PASSWORD_MESSAGE
    }

}


export const forgotPassword = (user) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(forgotPasswordRequest())
        await axios.post(`${config.apiUrl}/front/users/forgotpassword`, user, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status === 1) {

                    let responseData = {
                        data: serverResponse.data,
                        message: serverResponse.message
                    };

                    dispatch(forgotPasswordSuccess(responseData));

                }
                else {
                    dispatch(forgotPasswordFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(forgotPasswordFailure(errorMsg));

            });
    }

}



const resetPasswordRequest = () => {
    return {
        type: RESET_PASSWORD_REQUEST
    }
}

const resetPasswordSuccess = (response) => {
    return {
        type: RESET_PASSWORD_SUCCESS,
        payload: response
    }
}

const resetPasswordFailure = (response) => {
    return {
        type: RESET_PASSWORD_FAILURE,
        payload: response
    }
}

export const clearResetPasswordMessage = (response) => {
    return {
        type: CLEAR_RESET_PASSWORD_MESSAGE,
        payload: response
    }
}



export const resetPassword = (resetData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(resetPasswordRequest())
        await axios.post(`${config.apiUrl}/front/users/resetpassword`, resetData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status === 1) {

                    let responseData = {
                        data: serverResponse.data,
                        message: serverResponse.message
                    };

                    dispatch(resetPasswordSuccess(responseData));

                }
                else {
                    dispatch(resetPasswordFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(resetPasswordFailure(errorMsg));

            });
    }

}






const saveProfilePicRequest = () => {

    return {
        type: SAVE_PROFILE_PIC_REQUEST
    }

}

const saveProfilePicSuccess = (response) => {
    return {
        type: SAVE_PROFILE_PIC_SUCCESS,
        payload: response
    }
}


const saveProfilePicFailure = (response) => {
    return {
        type: SAVE_PROFILE_PIC_FAILURE,
        payload: response
    }
}




export const saveProfilePic = (file) => {

    const saveData = new FormData();
    saveData.append('profile_pic', file);
    saveData.append('token', JSON.parse(localStorage.getItem('stashGuruToken')));


    return async (dispatch) => {
        dispatch(saveProfilePicRequest())
        await axios.post(`${config.apiUrl}/front/users/update_profile_pic`, saveData)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(saveProfilePicSuccess(serverResponse.list));
                    dispatch(getUsers());

                }
                else {
                    dispatch(saveProfilePicFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(saveProfilePicFailure(errorMsg));

            });
    }

}


const profileCheckRequest = () => {
    return {
        type: PROIFLE_CHECK_REQUEST
    }
}

const profileCheckSuccess = (response) => {
    return {
        type: PROFILE_CHECK_SUCCESS,
        payload: response

    }
}

const profileCheckFailure = (response) => {
    return {
        type: PROFILE_CHECK_FAILURE,
        payload: response
    }
}



export const profileCheckSave = (data) => {

    return async (dispatch) => {

        data.token = await validateClientToken();


        dispatch(profileCheckRequest())
        await axios.post(`${config.apiUrl}/front/users/update_account`, data)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(profileCheckSuccess(serverResponse.data));

                }
                else {
                    dispatch(profileCheckFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(profileCheckFailure(errorMsg));

            });
    }

}







const saveProfileRequest = () => {

    return {
        type: SAVE_PROFILE_REQUEST
    }

}

const saveProfileSuccess = (response) => {
    return {
        type: SAVE_PROFILE_SUCCESS,
        payload: response
    }
}


const saveProfileFailure = (response) => {
    return {
        type: SAVE_PROFILE_FAILURE,
        payload: response
    }
}




export const saveProfile = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem('stashGuruToken'));

    return async (dispatch) => {
        dispatch(saveProfileRequest())
        await axios.post(`${config.apiUrl}/front/users/update_profile_details`, reqData)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(saveProfileSuccess(serverResponse.list));
                    dispatch(getUsers());
                    dispatch(toggleProfileModal(false));
                }
                else {
                    dispatch(saveProfileFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(saveProfileFailure(errorMsg));

            });
    }

}



export const toggleProfileModal = (response) => {
    return {
        type: TOGGLE_PROFILE_MODAL,
        payload: response
    }
}



const deleteAccountRequest = () => {
    return {
        type: DELETE_USER_REQUEST
    }
}


const deleteAccountSuccess = (response) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: response
    }
}

const deleteAccountFailure = (response) => {
    return {
        type: DELETE_USER_FAILURE,
        payload: response
    }
}


export const deleteAccount = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    reqData.token = JSON.parse(localStorage.getItem('stashGuruToken'));

    return async (dispatch) => {
        dispatch(deleteAccountRequest())
        await axios.post(`${config.apiUrl}/front/users/delete_account`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status === 1) {

                    dispatch(deleteAccountSuccess("Account deleted successfully"));

                    Swal.fire(
                        'Deleted!',
                        'Your account has been deleted successfully.',
                        'success'
                    );

                    dispatch(logoutUser());

                }
                else {

                    Swal.fire(
                        'Error!',
                        serverResponse.message,
                        'error'
                    );

                    dispatch(deleteAccountFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(deleteAccountFailure(errorMsg));

            });
    }

}

