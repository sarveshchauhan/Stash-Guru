import axios from 'axios'
import { config } from '../../config/config';
import { validateClientToken } from '../../helpers/tokenHelpers';
import store from '../store';
import { ADD_BANK_FAILURE, ADD_BANK_REQUEST, ADD_BANK_SUCCESS, ADD_CARD_FAILURE, ADD_CARD_REQUEST, ADD_CARD_SUCCESS, BANK_LIST_FAILURE, BANK_LIST_REQUEST, BANK_LIST_SUCCESS, CARD_INFO_FAILURE, CARD_INFO_REQUEST, CARD_INFO_SUCCESS, DELETE_BANK_FAILURE, DELETE_BANK_REQUEST, DELETE_BANK_SUCCESS, GUEST_PAYMENT_LISTING_FAILURE, GUEST_PAYMENT_LISTING_REQUEST, GUEST_PAYMENT_LISTING_SUCCESS, HOST_PAYMENT_LISTING_FAILURE, HOST_PAYMENT_LISTING_REQUEST, HOST_PAYMENT_LISTING_SUCCESS, SET_DEFAULT_BANK_FAILURE, SET_DEFAULT_BANK_REQUEST, SET_DEFAULT_BANK_SUCCESS, TOGGLE_BANK_MODAL, TOGGLE_NEW_CARD_MODAL } from './paymentTypes';
import Swal from 'sweetalert2';


export const toggleNewCardModal = (response) => {

    return {
        type: TOGGLE_NEW_CARD_MODAL,
        payload: response
    }

}


const addCardRequest = () => {
    return {
        type: ADD_CARD_REQUEST
    }
}

const addCardSuccess = (response) => {
    return {
        type: ADD_CARD_SUCCESS,
        payload: response
    }
}

const addCardFailure = (response) => {
    return {
        type: ADD_CARD_FAILURE,
        payload: response
    }
}


export const addNewCard = (reqData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(addCardRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/stripe/create_card`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Card saved successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    dispatch(toggleNewCardModal(false));

                    dispatch(addCardSuccess(serverResponse.data));

                }
                else {
                    dispatch(addCardFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(addCardFailure(errorMsg));

            });
    }

}





const cardInfoRequest = () => {
    return {
        type: CARD_INFO_REQUEST
    }
}

const cardInfoSuccess = (response) => {
    return {
        type: CARD_INFO_SUCCESS,
        payload: response
    }
}


const cardInfoFailure = (response) => {
    return {
        type: CARD_INFO_FAILURE,
        payload: response
    }
}


export const getCardInfo = (reqData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(cardInfoRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/stripe/card_info`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(cardInfoSuccess(serverResponse.data));

                }
                else {
                    dispatch(cardInfoSuccess(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(cardInfoFailure(errorMsg));

            });
    }

}





export const addBankRequest = () => {
    return {
        type: ADD_BANK_REQUEST
    }
}


const addBankSuccess = (response) => {
    return {
        type: ADD_BANK_SUCCESS,
        payload: response
    }
}

export const addBankFailure = (response) => {
    return {
        type: ADD_BANK_FAILURE,
        payload: response
    }
}






export const addBank = (reqData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(addBankRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/stripe/create_bank`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Bank saved successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    dispatch(toggleBankModal(false));
                    dispatch(getBankList());
                    dispatch(addBankSuccess(serverResponse.data));

                }
                else {
                    dispatch(addBankFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(addBankFailure(errorMsg));

            });
    }

}



export const toggleBankModal = (response) => {
    return {
        type: TOGGLE_BANK_MODAL,
        payload: response
    }
}





export const bankListRequest = () => {
    return {
        type: BANK_LIST_REQUEST
    }
}


const bankListSuccess = (response) => {
    return {
        type: BANK_LIST_SUCCESS,
        payload: response
    }
}

export const bankListFailure = (response) => {
    return {
        type: BANK_LIST_FAILURE,
        payload: response
    }
}






export const getBankList = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(bankListRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/stripe/list_bank`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(bankListSuccess(serverResponse.data));

                }
                else {
                    dispatch(bankListFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(bankListFailure(errorMsg));

            });
    }

}





const deleteBankRequest = () => {
    return {
        type: DELETE_BANK_REQUEST
    }
}

const deleteBankSuccess = (response) => {
    return {
        type: DELETE_BANK_SUCCESS,
        payload: response
    }
}

const deleteBankFailure = (response) => {
    return {
        type: DELETE_BANK_FAILURE,
        payload: response
    }
}



export const deleteBank = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(deleteBankRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/stripe/delete_bank`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(getBankList());
                    dispatch(deleteBankSuccess(serverResponse.data));

                }
                else {
                    dispatch(deleteBankFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(deleteBankFailure(errorMsg));

            });
    }

}








const guestPaymentListingRequest = () => {
    return {
        type: GUEST_PAYMENT_LISTING_REQUEST
    }
}

const guestPaymentListingSuccess = (response) => {
    return {
        type: GUEST_PAYMENT_LISTING_SUCCESS,
        payload: response
    }
}

const guestPaymentListingFailure = (response) => {
    return {
        type: GUEST_PAYMENT_LISTING_FAILURE,
        payload: response
    }
}



export const getGuestPaymentListing = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(guestPaymentListingRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/booking/guest_payment_listing`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(guestPaymentListingSuccess(serverResponse.data));

                }
                else {
                    dispatch(guestPaymentListingFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(guestPaymentListingFailure(errorMsg));

            });
    }

}





const hostPaymentListingRequest = () => {
    return {
        type: HOST_PAYMENT_LISTING_REQUEST
    }
}

const hostPaymentListingSuccess = (response) => {
    return {
        type: HOST_PAYMENT_LISTING_SUCCESS,
        payload: response
    }
}

const hostPaymentListingFailure = (response) => {
    return {
        type: HOST_PAYMENT_LISTING_FAILURE,
        payload: response
    }
}



export const getHostPaymentListing = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(hostPaymentListingRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/booking/host_payment_listing`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(hostPaymentListingSuccess(serverResponse.data));

                }
                else {
                    dispatch(hostPaymentListingFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(hostPaymentListingFailure(errorMsg));

            });
    }

}






const setDefaultBankRequest = () => {
    return {
        type: SET_DEFAULT_BANK_REQUEST
    }
}

const setDefaultBankSuccess = (response) => {
    return {
        type: SET_DEFAULT_BANK_SUCCESS,
        payload: response
    }
}

const setDefaultBankFailure = (response) => {
    return {
        type: SET_DEFAULT_BANK_FAILURE,
        payload: response
    }
}



export const setDefaultBank = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(setDefaultBankRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/stripe/set_default_bank`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(getBankList());
                    dispatch(setDefaultBankSuccess(serverResponse.data));

                }
                else {
                    dispatch(setDefaultBankFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(setDefaultBankFailure(errorMsg));

            });
    }

}