import FrontHomePagesLayoutCtrl from "../../front/layout/HomeLayout";
import { ADD_INVENTORY_FAILURE, ADD_INVENTORY_REQUEST, ADD_INVENTORY_SUCCESS, BOOKING_COUNT_FAILURE, BOOKING_COUNT_REQUEST, BOOKING_COUNT_SUCCESS, BOOKING_FAILURE, BOOKING_INFO, BOOKING_LIST, BOOKING_REQUEST, CANCEL_BOOKING_GUEST_FAILURE, CANCEL_BOOKING_GUEST_REQUEST, CANCEL_BOOKING_GUEST_SUCCESS, CANCEL_BOOKING_HOST_FAILURE, CANCEL_BOOKING_HOST_REQUEST, CANCEL_BOOKING_HOST_SUCCESS, CHANGE_DATE_FAILURE, CHANGE_DATE_REQUEST, CHANGE_DATE_SUCCESS, CHARGE_FAILURE, CHARGE_REQUEST, CHARGE_SUCCESS, COUPON_FAILURE, COUPON_REQUEST, COUPON_SUCCESS, GUEST_PAYMENT_FAILURE, GUEST_PAYMENT_REQUEST, GUEST_PAYMENT_SUCCESS, HOST_BOOKING_LIST_FAILURE, HOST_BOOKING_LIST_REQUEST, HOST_BOOKING_LIST_SUCCESS, HOST_PAYMENT_FAILURE, HOST_PAYMENT_REQUEST, HOST_PAYMENT_SUCCESS, NEW_BOOKING_RESPONSE, SIGN_IN_FAILURE, SIGN_IN_HOST_FAILURE, SIGN_IN_HOST_REQUEST, SIGN_IN_HOST_SUCCESS, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, TERMS_FAILURE, TERMS_REQUEST, TERMS_SUCCESS, TOGGLE_BOOKING_DATE_EDIT_MODAL, TOGGLE_BOOKING_MODAL, TOGGLE_BOOKING_TERMS_MODAL, TOGGLE_BOOKING_TERMS_MODAL_HOST, TOGGLE_CANCEL_GUEST_BOOKING_MODAL, TOGGLE_CANCEL_HOST_BOOKING_MODAL, TOGGLE_INVENTORY_MODAL, TOGGLE_INVENTORY_VIEW_MODAL, UPDATE_BOOKING_FAILURE, UPDATE_BOOKING_REQUEST, UPDATE_BOOKING_SUCCESS } from "./bookingTypes";

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
    updateBookingError: "",

    showBookingDateEditModal: false,

    changeBookingDateLoading: false,
    changeBookingDateResponse: "",
    changeBookingDateError: "",

    showInventoryModal: false,

    addInventoryLoading: false,
    addInventoryResponse: "",
    addInventoryError: "",

    showBookingTermsModal: false,

    signInLoading: false,
    signInResponse: "",
    signInError: "",

    hostBookingTermsModal: {
        show: false,
        bookingId: ""
    },

    inventoryViewModal: {
        show: false,
        inventory: ""
    },

    signInHostLoading: false,
    signInHostResponse: "",
    signInHostError: "",

    guestPaymentList: "",
    guestPaymentLoading: false,
    guestPaymentError: "",

    hostPaymentList: "",
    hostPaymentLoading: false,
    hostPaymentError: "",

    cancelHostBookingLoading: false,
    cancelHostBookingResponse: "",
    cancelHostBookingError: "",

    cancelGuestBookingLoading: false,
    cancelGuestBookingResponse: "",
    cancelGuestBookingError: "",


    showCancelHostBookingModal: {
        show: false,
        booking_id: ""
    },

    showCancelGuestBookingModal: {
        show: false,
        booking_id: ""
    },


    bookingCountLoading: false,
    bookingCount: 0,
    bookingCountError: "",


    termsLoading: false,
    termsDetail: "",
    termsError: "",

    couponLoading: false,
    couponData: "",
    couponError: ""




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

        case TOGGLE_BOOKING_DATE_EDIT_MODAL:
            return {
                ...state,
                showBookingDateEditModal: action.payload
            }

        case CHANGE_DATE_REQUEST:
            return {
                ...state,
                changeBookingDateLoading: true
            }

        case CHANGE_DATE_SUCCESS:
            return {
                ...state,
                changeBookingDateLoading: false,
                changeBookingDateResponse: action.payload
            }

        case CHANGE_DATE_FAILURE:
            return {
                ...state,
                changeBookingDateLoading: false,
                changeBookingDateError: action.payload
            }

        case TOGGLE_INVENTORY_MODAL:
            return {
                ...state,
                showInventoryModal: action.payload
            }

        case ADD_INVENTORY_REQUEST:
            return {
                ...state,
                addInventoryLoading: true,
                addInventoryResponse: "",
                addInventoryError: ""
            }

        case ADD_INVENTORY_SUCCESS:
            return {
                ...state,
                addInventoryLoading: false,
                addInventoryResponse: action.payload
            }

        case ADD_INVENTORY_FAILURE:
            return {
                ...state,
                addInventoryLoading: false,
                addInventoryError: action.payload
            }

        case TOGGLE_BOOKING_TERMS_MODAL:
            return {
                ...state,
                showBookingTermsModal: action.payload
            }

        case SIGN_IN_REQUEST:
            return {
                ...state,
                signInLoading: true,
                signInResponse: "",
                signInError: ""
            }

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                signInLoading: false,
                signInResponse: action.payload
            }

        case SIGN_IN_FAILURE:
            return {
                ...state,
                signInLoading: false,
                signInError: action.payload
            }

        case TOGGLE_BOOKING_TERMS_MODAL_HOST:
            return {
                ...state,
                hostBookingTermsModal: action.payload
            }

        case TOGGLE_INVENTORY_VIEW_MODAL:
            return {
                ...state,
                inventoryViewModal: action.payload
            }

        case SIGN_IN_HOST_REQUEST:
            return {
                ...state,
                signInHostLoading: true
            }

        case SIGN_IN_HOST_SUCCESS:
            return {
                ...state,
                signInHostLoading: false,
                signInHostResponse: action.payload

            }

        case SIGN_IN_HOST_FAILURE:
            return {
                ...state,
                signInHostLoading: false,
                signInHostError: action.payload
            }

        case GUEST_PAYMENT_REQUEST:
            return {
                ...state,
                guestPaymentLoading: true
            }

        case GUEST_PAYMENT_SUCCESS:
            return {
                ...state,
                guestPaymentLoading: false,
                guestPaymentList: action.payload
            }

        case GUEST_PAYMENT_FAILURE:
            return {
                ...state,
                guestPaymentLoading: false,
                guestPaymentError: action.payload
            }

        case HOST_PAYMENT_REQUEST:
            return {
                ...state,
                hostPaymentLoading: true,
            }

        case HOST_PAYMENT_SUCCESS:
            return {
                ...state,
                hostPaymentLoading: false,
                hostPaymentList: action.payload
            }

        case HOST_PAYMENT_FAILURE:
            return {
                ...state,
                hostPaymentLoading: false,
                hostPaymentError: action.payload
            }

        case CANCEL_BOOKING_HOST_REQUEST:
            return {
                ...state,
                cancelHostBookingLoading: true
            }

        case CANCEL_BOOKING_HOST_SUCCESS:
            return {
                ...state,
                cancelHostBookingLoading: false,
                cancelHostBookingResponse: action.payload
            }

        case CANCEL_BOOKING_HOST_FAILURE:
            return {
                ...state,
                cancelHostBookingLoading: false,
                cancelHostBookingError: action.payload
            }


        case CANCEL_BOOKING_GUEST_REQUEST:
            return {
                ...state,
                cancelGuestBookingLoading: true
            }

        case CANCEL_BOOKING_GUEST_SUCCESS:
            return {
                ...state,
                cancelGuestBookingLoading: false,
                cancelGuestBookingResponse: action.payload
            }

        case CANCEL_BOOKING_GUEST_FAILURE:
            return {
                ...state,
                cancelGuestBookingLoading: false,
                cancelGuestBookingError: action.payload
            }

        case TOGGLE_CANCEL_HOST_BOOKING_MODAL:
            return {
                ...state,
                showCancelHostBookingModal: action.payload
            }

        case TOGGLE_CANCEL_GUEST_BOOKING_MODAL:
            return {
                ...state,
                showCancelGuestBookingModal: action.payload
            }

        case BOOKING_COUNT_REQUEST:
            return {
                ...state,
                bookingCountLoading: true
            }

        case BOOKING_COUNT_SUCCESS:
            return {
                ...state,
                bookingCountLoading: false,
                bookingCount: action.payload
            }

        case BOOKING_COUNT_FAILURE:
            return {
                ...state,
                bookingCountLoading: false,
                bookingCountError: action.payload
            }

        case TERMS_REQUEST:
            return {
                ...state,
                termsLoading: true
            }

        case TERMS_SUCCESS:
            return {
                ...state,
                termsLoading: false,
                termsDetail: action.payload
            }

        case TERMS_FAILURE:
            return {
                ...state,
                termsLoading: false,
                termsError: action.payload
            }

        case COUPON_REQUEST:
            return {
                ...state,
                couponLoading: true,
                couponError: "",
                couponData: ""
            }

        case COUPON_SUCCESS:
            return {
                ...state,
                couponLoading: false,
                couponData: action.payload
            }

        case COUPON_FAILURE:
            return {
                ...state,
                couponLoading: false,
                couponError: action.payload
            }


        default:
            return state;
    }

}

export default reducer; 