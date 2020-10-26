import axios from 'axios'
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from "./authTypes"
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

export const loginUser = (user) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };
    return async function(dispatch) {
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