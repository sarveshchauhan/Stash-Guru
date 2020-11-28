import { BOOKING_FAILURE, BOOKING_REQUEST, NEW_BOOKING_RESPONSE, TOGGLE_BOOKING_MODAL } from "./bookingTypes";

const initialState = {

    bookingLoading: false,
    bookingError: "",

    showBookingModal: false,
    newBookingData: ""

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_BOOKING_MODAL:
            return {
                ...state,
                showBookingModal: action.payload
            }

        case BOOKING_REQUEST:
            return {
                ...state,
                bookingError: "",
                bookingLoading: true

            }

        case BOOKING_FAILURE:
            return {
                ...state,
                bookingLoading: false,
                bookingError: action.payload
            }

        case NEW_BOOKING_RESPONSE:
            return {
                ...state,
                newBookingData: action.payload,
                bookingLoading: false
            }



        default:
            return state;
    }

}

export default reducer; 