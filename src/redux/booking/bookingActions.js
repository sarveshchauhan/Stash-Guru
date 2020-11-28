import axios from 'axios'
import { config } from '../../config/config';
import { validateClientToken } from '../../helpers/tokenHelpers';
import { TOGGLE_BOOKING_MODAL, BOOKING_REQUEST, BOOKING_FAILURE, NEW_BOOKING_RESPONSE } from './bookingTypes';


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

