import { REFERRAL_INVITE_FAILURE, REFERRAL_INVITE_REQUEST, REFERRAL_INVITE_SUCCESS, REFERRAL_LIST_FAILURE, REFERRAL_LIST_REQUEST, REFERRAL_LIST_SUCCESS, WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from "./walletTypes";

const initialState = {

    walletLoading: false,
    walletResponse: "",
    walletError: "",

    referralListLoading: false,
    referralList: "",
    referralListError: "",

    referralInviteLoading: false,
    referralInviteResponse: "",
    referralInviteError: ""

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case WALLET_REQUEST:
            return {
                ...state,
                walletLoading: true
            }

        case WALLET_SUCCESS:
            return {
                ...state,
                walletLoading: false,
                walletResponse: action.payload
            }

        case WALLET_FAILURE:
            return {
                ...state,
                walletLoading: false,
                walletError: action.payload
            }

        case REFERRAL_LIST_REQUEST:
            return {
                ...state,
                referralListLoading: true
            }

        case REFERRAL_LIST_SUCCESS:
            return {
                ...state,
                referralListLoading: false,
                referralList: action.payload
            }

        case REFERRAL_LIST_FAILURE:
            return {
                ...state,
                referralListLoading: false,
                referralListError: action.payload
            }

        case REFERRAL_INVITE_REQUEST:
            return {
                ...state,
                referralInviteLoading: true,
                referralInviteError: "",
                referralInviteResponse: ""
            }

        case REFERRAL_INVITE_SUCCESS:
            return {
                ...state,
                referralInviteLoading: false,
                referralInviteResponse: action.payload
            }

        case REFERRAL_INVITE_FAILURE:
            return {
                ...state,
                referralInviteLoading: false,
                referralInviteError: action.payload
            }


        default:
            return state;
    }

}

export default reducer; 