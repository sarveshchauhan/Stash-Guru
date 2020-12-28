import { TESTIMONIAL_FAILURE, TESTIMONIAL_REQUEST, TESTIMONIAL_SUCCESS } from "./frontTypes";

const initialState = {

    testimonialLoading: false,
    testimonialData: [],
    testimonialError: ""

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case TESTIMONIAL_REQUEST:
            return {
                ...state,
                testimonialLoading: true
            }

        case TESTIMONIAL_SUCCESS:
            return {
                ...state,
                testimonialLoading: false,
                testimonialData: action.payload
            }

        case TESTIMONIAL_FAILURE:
            return {
                ...state,
                testimonialLoading: false,
                testimonialError: action.payload
            }


        default:
            return state;
    }

}

export default reducer; 