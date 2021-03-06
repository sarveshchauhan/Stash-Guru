import axios from 'axios';
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_DETAILS_REQUEST, SEARCH_DETAILS_SUCCESS, SEARCH_DETAILS_FAILURE, NEARBY_REQUEST, NEARBY_SUCCESS, NEARBY_FAILURE } from "./searchTypes";
import { config } from '../../config/config';

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


const nearbyRequest = () => {
    return {
        type: NEARBY_REQUEST
    }
}

const nearbySuccess = response => {
    return {
        type: NEARBY_SUCCESS,
        payload: response
    }
}

const nearbyFailure = error => {
    return {
        type: NEARBY_FAILURE,
        payload: error
    }
}

const searchDetailsRequest = () => {
    return {
        type: SEARCH_DETAILS_REQUEST
    }
}

const searchDetailsSuccess = response => {
    return {
        type: SEARCH_DETAILS_SUCCESS,
        payload: response
    }
}

const searchDetailsFailure = error => {
    return {
        type: SEARCH_DETAILS_FAILURE,
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
            const response = await axios.post(`${config.apiUrl}/front/search/list`, data, requestConfig);
            const listResponse = response.data;

            if (listResponse.status) {
                const settings = await axios.post(`${config.apiUrl}/front/settings/details`, { key: 'vat' }, requestConfig);
                let vat = 0;
                if (settings.data.status) {
                    vat = settings.data.details.set_details
                }
                const listData = {
                    response: listResponse.message,
                    list: listResponse.list,
                    vat: vat
                };

                dispatch(searchSuccess(listData));

            }
            else {
                dispatch(searchFailure(listResponse.message));
            }

        }
        catch (error) {
            const errorMsg = error.message;
            dispatch(searchFailure(errorMsg));
        }
    }

}





export const nearbyListing = (data) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(nearbyRequest());

        try {
            const response = await axios.post(`${config.apiUrl}/front/search/nearby`, data, requestConfig);
            const listResponse = response.data;

            if (listResponse.status) {
                const settings = await axios.post(`${config.apiUrl}/front/settings/details`, { key: 'vat' }, requestConfig);
                let vat = 0;
                if (settings.data.status) {
                    vat = settings.data.details.set_details
                }
                const listData = {
                    response: listResponse.message,
                    list: listResponse.list,
                    vat: vat
                };

                dispatch(nearbySuccess(listData));

            }
            else {
                dispatch(nearbyFailure(listResponse.message));
            }

        }
        catch (error) {
            const errorMsg = error.message;
            dispatch(nearbyFailure(errorMsg));
        }
    }

}

















export const searchDetails = (id) => {
    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(searchDetailsRequest());
        try {
            const response = await axios.post(`${config.apiUrl}/front/search/details`, { store_id: id }, requestConfig);
            const detailsResponse = response.data;

            if (detailsResponse.status) {

                const settings = await axios.post(`${config.apiUrl}/front/settings/details`, { key: 'vat' }, requestConfig);
                let vat = 0;
                if (settings.data.status) {
                    vat = settings.data.details.set_details
                }

                const detailsData = {
                    response: detailsResponse.message,
                    details: detailsResponse.details,
                    vat: vat,
                    features: detailsResponse.features,
                    access: detailsResponse.access,
                    images: detailsResponse.images,
                    measurement_unit: detailsResponse.measurement_unit,
                    used_type: detailsResponse.used_type
                };

                dispatch(searchDetailsSuccess(detailsData));

            }
            else {
                dispatch(searchDetailsFailure(detailsResponse.message));
            }

        }
        catch (error) {
            const errorMsg = error.message;
            dispatch(searchDetailsFailure(errorMsg));
        }
    }
}
