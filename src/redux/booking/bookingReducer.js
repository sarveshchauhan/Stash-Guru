import { BOOKING_FAILURE, BOOKING_INFO, BOOKING_LIST, BOOKING_REQUEST, CHARGE_FAILURE, CHARGE_REQUEST, CHARGE_SUCCESS, NEW_BOOKING_RESPONSE, TOGGLE_BOOKING_MODAL } from "./bookingTypes";

const initialState = {

    bookingLoading: false,
    bookingError: "",

    showBookingModal: false,
    newBookingData: "",

    bookingInfo: "",

    chargeLoading: false,
    chargeInfo: "",
    chargeError: "",

    bookingList: ""

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


        case BOOKING_INFO:
            return {
                ...state,
                bookingInfo: action.payload,
                bookingLoading: false
            }


        case CHARGE_REQUEST:
            return {
                ...state,
                chargeLoading: true
            }

        case CHARGE_SUCCESS:
            return {
                ...state,
                chargeLoading: false,
                chargeInfo: action.payload
            }

        case CHARGE_FAILURE:
            return {
                ...state,
                chargeLoading: false,
                chargeError: action.payload
            }

        case BOOKING_LIST:
            return {
                ...state,
                bookingList: action.payload,
                bookingLoading: false,
            }


        default:
            return state;
    }

}

export default reducer; 