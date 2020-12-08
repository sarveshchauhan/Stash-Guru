import axios from 'axios'
import { config } from '../../config/config';
import { validateClientToken } from '../../helpers/tokenHelpers';
import { TOGGLE_BOOKING_MODAL, BOOKING_REQUEST, BOOKING_FAILURE, NEW_BOOKING_RESPONSE, BOOKING_INFO, CHARGE_REQUEST, CHARGE_SUCCESS, CHARGE_FAILURE, BOOKING_LIST, HOST_BOOKING_LIST_REQUEST, HOST_BOOKING_LIST_SUCCESS, HOST_BOOKING_LIST_FAILURE, UPDATE_BOOKING_REQUEST, UPDATE_BOOKING_SUCCESS, UPDATE_BOOKING_FAILURE } from './bookingTypes';


export const toggleBookingModal = (response) => {

    return {
        type: TOGGLE_BOOKING_MODAL,
        payload: response
    }

}


const bookingRequest = () => {

    return {
        type: BOOKING_REQUEST
    }

}



const bookingFailure = (response) => {

    return {
        type: BOOKING_FAILURE,
        payload: response
    }

}


const newBookingResponse = (response) => {
    return {
        type: NEW_BOOKING_RESPONSE,
        payload: response
    }
}


export const newBooking = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(bookingRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/create`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(newBookingResponse(serverResponse.info));
                    window.location.href = `/booking/${serverResponse.info.guid}`

                }
                else {
                    dispatch(bookingFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(bookingFailure(errorMsg));

            });
    }

}

const bookingInfo = (response) => {

    return {
        type: BOOKING_INFO,
        payload: response
    }

}


export const getBookingInfoByGuid = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(bookingRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/info_by_guid`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(bookingInfo(serverResponse.info));
                    // dispatch(newBookingResponse(serverResponse.info));
                    // window.location.href = `/booking/${serverResponse/.info.guid}`

                }
                else {
                    dispatch(bookingFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(bookingFailure(errorMsg));

            });
    }

}




export const getBookingInfoByStore = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(bookingRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/info_by_store`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(bookingInfo(serverResponse.info));
                    // dispatch(newBookingResponse(serverResponse.info));
                    // window.location.href = `/booking/${serverResponse/.info.guid}`

                }
                else {
                    dispatch(bookingFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(bookingFailure(errorMsg));

            });
    }

}




const chargeRequest = () => {
    return {
        type: CHARGE_REQUEST
    }
}


const chargeSuccess = (response) => {
    return {
        type: CHARGE_SUCCESS,
        payload: response
    }
}

const chargeFailure = (response) => {
    return {
        type: CHARGE_FAILURE,
        payload: response
    }
}


export const chargePayment = (reqData) => {


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(chargeRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/stripe/charge`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(chargeSuccess(serverResponse.info));
                    window.location.href = "/booking";

                }
                else {
                    dispatch(chargeFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(chargeFailure(errorMsg));

            });
    }

}

const bookingList = (response) => {
    return {
        type: BOOKING_LIST,
        payload: response
    }
}


export const getBookingList = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(bookingRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/list`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(bookingList(serverResponse.list));
                }
                else {
                    dispatch(bookingFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(bookingFailure(errorMsg));

            });
    }

}




const hostbookingListRequest = () => {
    return {
        type: HOST_BOOKING_LIST_REQUEST
    }
}

const hostbookingListSuccess = (response) => {
    return {
        type: HOST_BOOKING_LIST_SUCCESS,
        payload: response
    }
}

const hostbookingListFailure = (response) => {
    return {
        type: HOST_BOOKING_LIST_FAILURE,
        payload: response
    }
}




export const getHostBookingList = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(hostbookingListRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/host_list`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(hostbookingListSuccess(serverResponse.list));
                }
                else {
                    dispatch(hostbookingListFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(hostbookingListFailure(errorMsg));

            });
    }

}






const updateBookingRequest = () => {
    return {
        type: UPDATE_BOOKING_REQUEST
    }
}

const updateBookingSuccess = (response) => {
    return {
        type: UPDATE_BOOKING_SUCCESS,
        payload: response
    }
}

const updateBookingFailure = (response) => {
    return {
        type: UPDATE_BOOKING_FAILURE,
        payload: response
    }
}




export const updateBookingStatus = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(updateBookingRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/host_booking_status`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {
                    dispatch(getHostBookingList({}));
                    dispatch(updateBookingSuccess(serverResponse.list));
                }
                else {
                    dispatch(updateBookingFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(updateBookingFailure(errorMsg));

            });
    }

}
