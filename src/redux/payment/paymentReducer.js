import { ADD_BANK_FAILURE, ADD_BANK_REQUEST, ADD_BANK_SUCCESS, ADD_CARD_FAILURE, ADD_CARD_REQUEST, ADD_CARD_SUCCESS, BANK_LIST_FAILURE, BANK_LIST_REQUEST, BANK_LIST_SUCCESS, CARD_INFO_FAILURE, CARD_INFO_REQUEST, CARD_INFO_SUCCESS, DELETE_BANK_FAILURE, DELETE_BANK_REQUEST, DELETE_BANK_SUCCESS, TOGGLE_BANK_MODAL, TOGGLE_NEW_CARD_MODAL } from "./paymentTypes";

const initialState = {

    showAddCardModal: false,

    addCardLoading: false,
    addCardResponse: "",
    addCardError: "",

    cardInfoLoading: false,
    cardInfo: "",
    cardInfoError: "",

    showBankModal: false,

    addBankLoading: false,
    addBankResponse: "",
    addBankError: "",

    bankListLoading: false,
    bankList: "",
    bankListError: "",


    deleteBankLoading: false,
    deleteBankResponse: "",
    deleteBankError: ""


}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_NEW_CARD_MODAL:
            return {
                ...state,
                showAddCardModal: action.payload
            }

        case ADD_CARD_REQUEST:
            return {
                ...state,
                addCardLoading: true
            }

        case ADD_CARD_SUCCESS:
            return {
                ...state,
                addCardLoading: false,
                addCardResponse: action.payload
            }

        case ADD_CARD_FAILURE:
            return {
                ...state,
                addCardLoading: false,
                addCardError: action.payload
            }


        case CARD_INFO_REQUEST:
            return {
                ...state,
                cardInfoLoading: true
            }

        case CARD_INFO_SUCCESS:
            return {
                ...state,
                cardInfoLoading: false,
                cardInfo: action.payload
            }

        case CARD_INFO_FAILURE:
            return {
                ...state,
                cardInfoLoading: false,
                cardInfoError: action.payload
            }

        case TOGGLE_BANK_MODAL:
            return {
                ...state,
                showBankModal: action.payload
            }

        case ADD_BANK_REQUEST:
            return {
                ...state,
                addBankLoading: true,
                addBankError: "",
                addBankResponse: ""
            }

        case ADD_BANK_SUCCESS:
            return {
                ...state,
                addBankLoading: false,
                addBankResponse: action.payload
            }

        case ADD_BANK_FAILURE:
            return {
                ...state,
                addBankLoading: false,
                addBankError: action.payload
            }

        case BANK_LIST_REQUEST:
            return {
                ...state,
                bankListLoading: true
            }

        case BANK_LIST_SUCCESS:
            return {
                ...state,
                bankListLoading: false,
                bankList: action.payload
            }

        case BANK_LIST_FAILURE:
            return {
                ...state,
                bankListLoading: false,
                bankListError: action.payload
            }

        case DELETE_BANK_REQUEST:
            return {
                ...state,
                deleteBankLoading: true
            }

        case DELETE_BANK_SUCCESS:
            return {
                ...state,
                deleteBankLoading: false,
                deleteBankResponse: action.payload
            }

        case DELETE_BANK_FAILURE:
            return {
                ...state,
                deleteBankLoading: false,
                deleteBankError: action.payload
            }

        default:
            return state;
    }

}

export default reducer; 