import axios from 'axios'
import { config } from '../../config/config';
import store from './../store';
import { TESTIMONIAL_FAILURE, TESTIMONIAL_REQUEST, TESTIMONIAL_SUCCESS } from './frontTypes';


const testimonialRequest = () => {
    return {
        type: TESTIMONIAL_REQUEST
    }
}

const testimonialSuccess = (response) => {
    return {
        type: TESTIMONIAL_SUCCESS,
        payload: response
    }
}


const testimonialFailure = (response) => {

    return {
        type: TESTIMONIAL_FAILURE,
        payload: response
    }

}


export const getTestimonials = (reqData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(testimonialRequest())
        await axios.post(`${config.apiUrl}/front/users/testimonials`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(testimonialSuccess(serverResponse.data));

                }
                else {
                    dispatch(testimonialFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(testimonialFailure(errorMsg));

            });
    }

}