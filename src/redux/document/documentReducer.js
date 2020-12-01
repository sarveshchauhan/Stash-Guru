import { DOCUMENT_FAILURE, DOCUMENT_REQUEST, DOCUMENT_STEP_ONE_SAVE_FAILURE, DOCUMENT_STEP_ONE_SAVE_REQUEST, DOCUMENT_STEP_ONE_SAVE_SUCCESS, DOCUMENT_SUCCESS, DOC_UPLOAD_FAILURE, DOC_UPLOAD_REQUEST, DOC_UPLOAD_SUCCESS, MOBILE_VERIFY_FAILURE, MOBILE_VERIFY_REQUEST, MOBILE_VERIFY_SUCCESS, TOGGLE_DOCUMENT_DETAIL_MODAL, TOGGLE_DOCUMENT_UPLOAD_MODAL, TOGGLE_MOBILE_VERIFY_MODAL, TOGGLE_VERIFY_ID_MODAL, VERIFY_LIST_FAILURE, VERIFY_LIST_REQUEST, VERIFY_LIST_SUCCESS } from "./documentTypes";

const initialState = {

    documentList: "",
    documentListLoading: false,
    documentListError: "",
    documentDetailsModalShow: false,
    documentUploadModalShow: false,
    verifyIdModalShow: false,

    verifyList: "",
    verifyListLoading: false,
    verifytListError: "",

    documentStepOneResult: "",
    documentStepOneSaveLoading: false,
    documentStepOneSaveError: "",

    currentDocumentId: "",

    documentUploadResult: "",
    documentUploadLoading: false,
    documentUploadError: "",

    uploadedDocs: [],

    mobileVerifyShow: false,

    mobileVerifyLoading: false,
    mobileVerifyResponse: "",
    mobileVerifyError: ""


}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case DOCUMENT_REQUEST:
            return {
                ...state,
                documentListLoading: true
            }

        case DOCUMENT_SUCCESS:
            return {
                ...state,
                documentListLoading: false,
                documentList: action.payload
            }

        case DOCUMENT_FAILURE:
            return {
                ...state,
                documentListLoading: false,
                documentListError: action.payload
            }

        case TOGGLE_DOCUMENT_DETAIL_MODAL:
            return {
                ...state,
                documentDetailsModalShow: action.payload
            }

        case TOGGLE_DOCUMENT_UPLOAD_MODAL:

            return {
                ...state,
                documentUploadModalShow: action.payload,
                uploadedDocs: []
            }

        case TOGGLE_VERIFY_ID_MODAL:
            return {
                ...state,
                verifyIdModalShow: action.payload
            }

        case VERIFY_LIST_REQUEST:
            return {
                ...state,
                verifyListLoading: true
            }

        case VERIFY_LIST_SUCCESS:
            return {
                ...state,
                verifyListLoading: false,
                verifyList: action.payload
            }

        case VERIFY_LIST_FAILURE:
            return {
                ...state,
                verifyListLoading: false,
                verifytListError: action.payload
            }

        case DOCUMENT_STEP_ONE_SAVE_REQUEST:
            return {
                ...state,
                documentStepOneSaveLoading: true,
                documentStepOneSaveError: "",
                documentStepOneResult: ""
            }

        case DOCUMENT_STEP_ONE_SAVE_SUCCESS:
            return {
                ...state,
                documentStepOneSaveLoading: false,
                documentStepOneResult: action.payload,
                currentDocumentId: action.payload
            }

        case DOCUMENT_STEP_ONE_SAVE_FAILURE:
            return {
                ...state,
                documentStepOneSaveLoading: false,
                documentStepOneSaveError: action.payload
            }

        case DOC_UPLOAD_REQUEST:
            return {
                ...state,
                documentUploadLoading: true
            }

        case DOC_UPLOAD_SUCCESS:
            return {
                ...state,
                documentUploadLoading: false,
                documentUploadResult: action.payload,
                uploadedDocs: [...state.uploadedDocs, action.payload]
            }

        case DOC_UPLOAD_FAILURE:
            return {
                ...state,
                documentUploadLoading: false,
                documentUploadError: action.payload
            }

        case TOGGLE_MOBILE_VERIFY_MODAL:
            return {
                ...state,
                mobileVerifyShow: action.payload
            }

        case MOBILE_VERIFY_REQUEST:
            return {
                ...state,
                mobileVerifyLoading: true
            }

        case MOBILE_VERIFY_SUCCESS:
            return {
                ...state,
                mobileVerifyLoading: false,
                mobileVerifyResponse: action.payload
            }

        case MOBILE_VERIFY_FAILURE:
            return {
                ...state,
                mobileVerifyLoading: false,
                mobileVerifyError: action.payload
            }

        default:
            return state;
    }

}

export default reducer; 