import { BOOKING_FAILURE, BOOKING_INFO, BOOKING_LIST, BOOKING_REQUEST, CHARGE_FAILURE, CHARGE_REQUEST, CHARGE_SUCCESS, HOST_BOOKING_LIST_FAILURE, HOST_BOOKING_LIST_REQUEST, HOST_BOOKING_LIST_SUCCESS, NEW_BOOKING_RESPONSE, TOGGLE_BOOKING_MODAL, UPDATE_BOOKING_FAILURE, UPDATE_BOOKING_REQUEST, UPDATE_BOOKING_SUCCESS } from "./bookingTypes";

const initialState = {

    bookingLoading: false,
    bookingError: "",

    showBookingModal: false,
    newBookingData: "",

    bookingInfo: "",

    chargeLoading: false,
    chargeInfo: "",
    chargeError: "",

    bookingList: "",

    hostBookingListLoading: false,
    hostBookingList: "",
    hostBookingListError: "",

    updateBookingLoading: false,
    updateBookingResponse: "",
    updateBookingError: ""

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

        case HOST_BOOKING_LIST_REQUEST:
            return {
                ...state,
                hostBookingListLoading: true
            }

        case HOST_BOOKING_LIST_SUCCESS:
            return {
                ...state,
                hostBookingListLoading: false,
                hostBookingList: action.payload
            }

        case HOST_BOOKING_LIST_FAILURE:
            return {
                ...state,
                hostBookingListLoading: false,
                hostBookingListError: action.payload
            }

        case UPDATE_BOOKING_REQUEST:
            return {
                ...state,
                updateBookingLoading: true
            }

        case UPDATE_BOOKING_SUCCESS:
            return {
                ...state,
                updateBookingLoading: false,
                updateBookingResponse: action.payload
            }

        case UPDATE_BOOKING_FAILURE:
            return {
                ...state,
                updateBookingLoading: false,
                updateBookingError: action.payload
            }


        default:
            return state;
    }

}

export default reducer; 