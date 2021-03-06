import axios from 'axios'
import { config } from '../../config/config';
import { validateClientToken } from '../../helpers/tokenHelpers';
import { TOGGLE_BOOKING_MODAL, BOOKING_REQUEST, BOOKING_FAILURE, NEW_BOOKING_RESPONSE, BOOKING_INFO, CHARGE_REQUEST, CHARGE_SUCCESS, CHARGE_FAILURE, BOOKING_LIST, HOST_BOOKING_LIST_REQUEST, HOST_BOOKING_LIST_SUCCESS, HOST_BOOKING_LIST_FAILURE, UPDATE_BOOKING_REQUEST, UPDATE_BOOKING_SUCCESS, UPDATE_BOOKING_FAILURE, TOGGLE_BOOKING_DATE_EDIT_MODAL, CHANGE_DATE_REQUEST, CHANGE_DATE_SUCCESS, CHANGE_DATE_FAILURE, TOGGLE_INVENTORY_MODAL, ADD_INVENTORY_REQUEST, ADD_INVENTORY_SUCCESS, ADD_INVENTORY_FAILURE, TOGGLE_BOOKING_TERMS_MODAL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, TOGGLE_BOOKING_TERMS_MODAL_HOST, TOGGLE_INVENTORY_VIEW_MODAL, SIGN_IN_HOST_REQUEST, SIGN_IN_HOST_SUCCESS, SIGN_IN_HOST_FAILURE, GUEST_PAYMENT_REQUEST, GUEST_PAYMENT_SUCCESS, GUEST_PAYMENT_FAILURE, HOST_PAYMENT_REQUEST, HOST_PAYMENT_SUCCESS, HOST_PAYMENT_FAILURE, CANCEL_BOOKING_HOST_REQUEST, CANCEL_BOOKING_HOST_SUCCESS, CANCEL_BOOKING_HOST_FAILURE, TOGGLE_CANCEL_HOST_BOOKING_MODAL, TOGGLE_CANCEL_GUEST_BOOKING_MODAL, CANCEL_BOOKING_GUEST_REQUEST, CANCEL_BOOKING_GUEST_SUCCESS, CANCEL_BOOKING_GUEST_FAILURE, BOOKING_COUNT_REQUEST, BOOKING_COUNT_SUCCESS, BOOKING_COUNT_FAILURE, TERMS_REQUEST, TERMS_SUCCESS, TERMS_FAILURE, COUPON_REQUEST, COUPON_SUCCESS, COUPON_FAILURE } from './bookingTypes';
import Swal from 'sweetalert2';
import store from '../store';

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
                    // window.location.href = `/booking/${serverResponse.info.guid}`
                    window.location.href = `/book/${reqData.store_id}/${serverResponse.info.guid}`;

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

    // reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(bookingRequest());

        // reqData.token = await validateClientToken();


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




export const getHostBookingList = (reqData = {}) => {

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


export const toggleBookingDateEditModal = (response) => {
    return {
        type: TOGGLE_BOOKING_DATE_EDIT_MODAL,
        payload: response
    }
}







const changeBookingStartDateRequest = () => {
    return {
        type: CHANGE_DATE_REQUEST
    }
}

const changeBookingStartDateSuccess = (response) => {
    return {
        type: CHANGE_DATE_SUCCESS,
        payload: response
    }
}

const changeBookingStartDateFailure = (response) => {
    return {
        type: CHANGE_DATE_FAILURE,
        payload: response
    }
}




export const changeBookingStartDate = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(changeBookingStartDateRequest());

        reqData.token = await validateClientToken();
        reqData.booking_id = store.getState().booking.bookingInfo.booking_id;


        await axios.post(`${config.apiUrl}/front/booking/plan_date_update`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {
                    dispatch(toggleBookingDateEditModal(false));

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Date changed successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    dispatch(getBookingInfoByGuid({
                        guid: store.getState().booking.bookingInfo.guid
                    }));


                    dispatch(changeBookingStartDateSuccess(serverResponse.list));
                }
                else {
                    dispatch(changeBookingStartDateFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(changeBookingStartDateFailure(errorMsg));

            });
    }

}


export const toggleInventoryModal = (response) => {
    return {
        type: TOGGLE_INVENTORY_MODAL,
        payload: response
    }
}




const addInventoryRequest = () => {
    return {
        type: ADD_INVENTORY_REQUEST
    }
}

const addInventorySuccess = (response) => {
    return {
        type: ADD_INVENTORY_SUCCESS,
        payload: response
    }
}

const addInventoryFailure = (response) => {
    return {
        type: ADD_INVENTORY_FAILURE,
        payload: response
    }
}




export const addInventory = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(addInventoryRequest());

        reqData.token = await validateClientToken();
        reqData.booking_id = store.getState().booking.bookingInfo.booking_id;


        await axios.post(`${config.apiUrl}/front/booking/add_inventory`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {
                    dispatch(toggleInventoryModal(false));

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Inventory updated successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    dispatch(getBookingInfoByGuid({
                        guid: store.getState().booking.bookingInfo.guid
                    }));


                    dispatch(addInventorySuccess("Updated successfully"));
                }
                else {
                    dispatch(addInventoryFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(addInventoryFailure(errorMsg));

            });
    }

}


export const toggleBookingTermsModal = (response) => {

    return {
        type: TOGGLE_BOOKING_TERMS_MODAL,
        payload: response
    }

}








const signInRequest = () => {
    return {
        type: SIGN_IN_REQUEST
    }
}

const signInSuccess = (response) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: response
    }
}

const signInFailure = (response) => {
    return {
        type: SIGN_IN_FAILURE,
        payload: response
    }
}




export const termsSignIn = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(signInRequest());

        reqData.token = await validateClientToken();
        reqData.booking_id = store.getState().booking.bookingInfo.booking_id;


        await axios.post(`${config.apiUrl}/front/booking/sign_in_terms`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {
                    dispatch(toggleBookingTermsModal(false));

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Signed in successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    dispatch(getBookingInfoByGuid({
                        guid: store.getState().booking.bookingInfo.guid
                    }));


                    dispatch(signInSuccess("Updated successfully"));
                }
                else {
                    dispatch(signInFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(signInFailure(errorMsg));

            });
    }

}


export const toggleBookingTermsModalHost = (response) => {
    return {
        type: TOGGLE_BOOKING_TERMS_MODAL_HOST,
        payload: response
    }
}

export const toggleInventoryViewModal = (response) => {
    return {
        type: TOGGLE_INVENTORY_VIEW_MODAL,
        payload: response
    }
}









const signInHostRequest = () => {
    return {
        type: SIGN_IN_HOST_REQUEST
    }
}

const signInHostSuccess = (response) => {
    return {
        type: SIGN_IN_HOST_SUCCESS,
        payload: response
    }
}

const signInHostFailure = (response) => {
    return {
        type: SIGN_IN_HOST_FAILURE,
        payload: response
    }
}




export const termsSignInHost = (reqData) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(signInHostRequest());

        reqData.token = await validateClientToken();



        await axios.post(`${config.apiUrl}/front/booking/host_sign_in_terms`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {
                    dispatch(toggleBookingTermsModalHost({
                        bookingId: "",
                        show: false
                    }));

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Signed in successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    dispatch(getHostBookingList({}));

                    // dispatch(getBookingList({
                    //     guid: store.getState().booking.bookingInfo.guid
                    // }));


                    dispatch(signInHostSuccess("Updated successfully"));
                }
                else {
                    dispatch(signInHostFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(signInHostFailure(errorMsg));

            });
    }

}




const guestPaymentRequest = () => {
    return {
        type: GUEST_PAYMENT_REQUEST
    }
}

const guestPaymentSuccess = (response) => {
    return {
        type: GUEST_PAYMENT_SUCCESS,
        payload: response
    }
}

const guestPaymentFailure = (response) => {
    return {
        type: GUEST_PAYMENT_FAILURE,
        payload: response
    }
}




export const getGuestPaymentList = (reqData = {}, query = "") => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(guestPaymentRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/guest_payment_list?${query}`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(guestPaymentSuccess(serverResponse.list));
                }
                else {
                    dispatch(guestPaymentFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(guestPaymentFailure(errorMsg));

            });
    }

}




const hostPaymentRequest = () => {
    return {
        type: HOST_PAYMENT_REQUEST
    }
}

const hostPaymentSuccess = (response) => {
    return {
        type: HOST_PAYMENT_SUCCESS,
        payload: response
    }
}

const hostPaymentFailure = (response) => {
    return {
        type: HOST_PAYMENT_FAILURE,
        payload: response
    }
}




export const getHostPaymentList = (reqData = {}, query = "") => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(hostPaymentRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/host_payment_list?${query}`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(hostPaymentSuccess(serverResponse.list));
                }
                else {
                    dispatch(hostPaymentFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(hostPaymentFailure(errorMsg));

            });
    }

}






const cancelBookingHostRequest = () => {
    return {
        type: CANCEL_BOOKING_HOST_REQUEST
    }
}

const cancelBookingHostSuccess = (response) => {
    return {
        type: CANCEL_BOOKING_HOST_SUCCESS,
        payload: response
    }
}

const cancelBookingHostFailure = (response) => {
    return {
        type: CANCEL_BOOKING_HOST_FAILURE,
        payload: response
    }
}




export const cancelBookingHost = (reqData = {}, query = "") => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(cancelBookingHostRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/host_cancelation?${query}`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Booking cancelled successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });


                    dispatch(toggleCancelHostBookingModal({
                        show: false,
                        booking_id: ""
                    }));



                    dispatch(getHostBookingList());
                    dispatch(cancelBookingHostSuccess(true));
                }
                else {
                    dispatch(cancelBookingHostFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(cancelBookingHostFailure(errorMsg));

            });
    }

}






const cancelBookingGuestRequest = () => {
    return {
        type: CANCEL_BOOKING_GUEST_REQUEST
    }
}

const cancelBookingGuestSuccess = (response) => {
    return {
        type: CANCEL_BOOKING_GUEST_SUCCESS,
        payload: response
    }
}

const cancelBookingGuestFailure = (response) => {
    return {
        type: CANCEL_BOOKING_GUEST_FAILURE,
        payload: response
    }
}




export const cancelBookingGuest = (reqData = {}, query = "") => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(cancelBookingGuestRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/booking/guest_cancelation?${query}`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Booking cancelled successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });


                    dispatch(toggleCancelGuestBookingModal({
                        show: false,
                        booking_id: ""
                    }));
                    dispatch(getBookingList({}));
                    dispatch(cancelBookingGuestSuccess(true));
                }
                else {
                    dispatch(cancelBookingGuestFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(cancelBookingGuestFailure(errorMsg));

            });
    }

}






export const toggleCancelHostBookingModal = (response) => {
    return {
        type: TOGGLE_CANCEL_HOST_BOOKING_MODAL,
        payload: response
    }
}


export const toggleCancelGuestBookingModal = (response) => {
    return {
        type: TOGGLE_CANCEL_GUEST_BOOKING_MODAL,
        payload: response
    }
}






const bookingCountRequest = () => {
    return {
        type: BOOKING_COUNT_REQUEST
    }
}

const bookingCountSuccess = (response) => {
    return {
        type: BOOKING_COUNT_SUCCESS,
        payload: response
    }
}

const bookingCountFailure = (response) => {
    return {
        type: BOOKING_COUNT_FAILURE,
        payload: response
    }
}




export const getBookingCount = (reqData = {}, query = "") => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(bookingCountRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/users/booking_count?${query}`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(bookingCountSuccess(serverResponse.data.count));

                }
                else {
                    dispatch(bookingCountFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(bookingCountFailure(errorMsg));

            });
    }

}







const termsRequest = () => {
    return {
        type: TERMS_REQUEST
    }
}

const termsSuccess = (response) => {
    return {
        type: TERMS_SUCCESS,
        payload: response
    }
}

const termsFailure = (response) => {
    return {
        type: TERMS_FAILURE,
        payload: response
    }
}




export const getSignInTerms = (reqData = {}) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(termsRequest());

        reqData.token = await validateClientToken();



        await axios.post(`${config.apiUrl}/front/users/sign_in_terms`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {
                    dispatch(termsSuccess(serverResponse.data));
                }
                else {
                    dispatch(termsFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(termsFailure(errorMsg));

            });
    }

}



const couponRequest = () => {
    return {
        type: COUPON_REQUEST
    }
}

const couponSuccess = (response) => {
    return {
        type: COUPON_SUCCESS,
        payload: response
    }
}

const couponFailure = (response) => {
    return {
        type: COUPON_FAILURE,
        payload: response
    }
}





export const applyCouponCode = (reqData = {}) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));



    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {

        if (!reqData.coupon_code) {
            return dispatch(couponFailure('Coupon code required!'));
        }


        dispatch(couponRequest());

        reqData.token = await validateClientToken();



        await axios.post(`${config.apiUrl}/front/booking/apply_coupon`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {
                    dispatch(couponSuccess(serverResponse.data));
                }
                else {
                    dispatch(couponFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(couponFailure(errorMsg));

            });
    }

}
