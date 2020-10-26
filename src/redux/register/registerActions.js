import axios from 'axios';
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE} from "./registerTypes";
import { config } from '../../config/config';

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

export const registerUser = (user) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(registerUserRequest());

        try {
            const response = await axios.post(`${config.apiUrl}/users/register`, user, requestConfig);
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