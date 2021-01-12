import axios from 'axios'
import { config } from '../../config/config';
import { validateClientToken } from '../../helpers/tokenHelpers';
import Swal from 'sweetalert2';
import store from '../store';
import { REFERRAL_INVITE_FAILURE, REFERRAL_INVITE_REQUEST, REFERRAL_INVITE_SUCCESS, REFERRAL_LIST_FAILURE, REFERRAL_LIST_REQUEST, REFERRAL_LIST_SUCCESS, WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from './walletTypes';



const walletRequest = () => {

    return {
        type: WALLET_REQUEST
    }

}



const walletSuccess = (response) => {

    return {
        type: WALLET_SUCCESS,
        payload: response
    }

}


const walletFailure = (response) => {
    return {
        type: WALLET_FAILURE,
        payload: response
    }
}


export const getWallet = (reqData = {}) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(walletRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/wallet/balance`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(walletSuccess(serverResponse.wallet_balance));

                }
                else {
                    dispatch(walletFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(walletFailure(errorMsg));

            });
    }

}





const referralListRequest = () => {

    return {
        type: REFERRAL_LIST_REQUEST
    }

}



const referralListSuccess = (response) => {

    return {
        type: REFERRAL_LIST_SUCCESS,
        payload: response
    }

}


const referralListFailure = (response) => {
    return {
        type: REFERRAL_LIST_FAILURE,
        payload: response
    }
}


export const getReferralList = (reqData = {}) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(referralListRequest());

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/wallet/refferal_list`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(referralListSuccess(serverResponse.list));

                }
                else {
                    dispatch(referralListFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(referralListFailure(errorMsg));

            });
    }

}





const referralInviteRequest = () => {

    return {
        type: REFERRAL_INVITE_REQUEST
    }

}



const referralInviteSuccess = (response) => {

    return {
        type: REFERRAL_INVITE_SUCCESS,
        payload: response
    }

}


const referralInviteFailure = (response) => {
    return {
        type: REFERRAL_INVITE_FAILURE,
        payload: response
    }
}


export const inviteReferral = (reqData = {}) => {

    reqData.token = JSON.parse(localStorage.getItem("stashGuruToken"));


    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(referralInviteRequest());

        if (!reqData.email) {
            dispatch(referralInviteFailure("Email is required!"));

            setTimeout(() => {
                dispatch(referralInviteFailure(""));
            }, 3000);

            return false;
        }

        reqData.token = await validateClientToken();


        await axios.post(`${config.apiUrl}/front/wallet/invitation`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(referralInviteSuccess(serverResponse.message));

                    setTimeout(() => {

                        dispatch(referralInviteSuccess(""));

                    }, 3000);

                }
                else {
                    dispatch(referralInviteFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(referralInviteFailure(errorMsg));

            });
    }

}