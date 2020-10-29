import axios from 'axios';
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE} from "./searchTypes";
import { config } from '../../config/config';
import { set_login_token } from "../../helpers/tokenHelpers";

const searchRequest = () => {
    return {
        type: SEARCH_REQUEST
    }
}

const searchSuccess = response => {
    return {
        type: SEARCH_SUCCESS,
        payload: response
    }
}

const searchFailure = error => {
    return {
        type: SEARCH_FAILURE,
        payload: error
    }
}

export const searchListing = (data) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(searchRequest());

        try {
            const response = await axios.post(`${config.apiUrl}/search/list`, {key: data}, requestConfig);
            const registerResponse = response.data;

            if (registerResponse.status) {

                const listData = {
                    response: registerResponse.message,
                    list: registerResponse.list
                };

                dispatch(searchSuccess(listData));

            }
            else {
                dispatch(searchFailure(registerResponse.message));
            }

        }
        catch (error) {
            const errorMsg = error.message;
            dispatch(searchFailure(errorMsg));
        }
    }

}
