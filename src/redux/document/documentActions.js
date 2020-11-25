import axios from 'axios'
import { config } from '../../config/config';
import store from '../store';
import { DOCUMENT_FAILURE, DOCUMENT_REQUEST, DOCUMENT_STEP_ONE_SAVE_FAILURE, DOCUMENT_STEP_ONE_SAVE_REQUEST, DOCUMENT_STEP_ONE_SAVE_SUCCESS, DOCUMENT_SUCCESS, DOC_UPLOAD_FAILURE, DOC_UPLOAD_REQUEST, DOC_UPLOAD_SUCCESS, TOGGLE_DOCUMENT_DETAIL_MODAL, TOGGLE_DOCUMENT_UPLOAD_MODAL, TOGGLE_VERIFY_ID_MODAL, VERIFY_LIST_FAILURE, VERIFY_LIST_REQUEST, VERIFY_LIST_SUCCESS } from './documentTypes';


const documentListRequest = () => {
    return {
        type: DOCUMENT_REQUEST
    }
}

const documentListSuccess = (response) => {
    return {
        type: DOCUMENT_SUCCESS,
        payload: response
    }
}

const documentListFailure = (response) => {
    return {
        type: DOCUMENT_FAILURE,
        payload: response
    }
}


export const getDocumentList = (reqData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(documentListRequest())
        await axios.post(`${config.apiUrl}/front/list/verify_doc`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {



                    dispatch(documentListSuccess(serverResponse.list));

                }
                else {
                    dispatch(documentListFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(documentListFailure(errorMsg));

            });
    }

}


export const toggleDocumentDetailModal = (response) => {
    return {
        type: TOGGLE_DOCUMENT_DETAIL_MODAL,
        payload: response
    }
}


export const toggleDocumentUploadModal = (response) => {

    return {
        type: TOGGLE_DOCUMENT_UPLOAD_MODAL,
        payload: response
    }
}


export const toggleVerifyIdModal = (response) => {
    return {
        type: TOGGLE_VERIFY_ID_MODAL,
        payload: response
    }
}







const verifyListRequest = () => {
    return {
        type: VERIFY_LIST_REQUEST
    }
}

const verifyListSuccess = (response) => {
    return {
        type: VERIFY_LIST_SUCCESS,
        payload: response
    }
}


const verifyListFailure = (response) => {
    return {
        type: VERIFY_LIST_FAILURE,
        payload: response
    }
}



export const getVerifyList = (reqData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(verifyListRequest())
        await axios.post(`${config.apiUrl}/front/users/verify_list`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {



                    dispatch(verifyListSuccess(serverResponse.list));

                }
                else {
                    dispatch(verifyListFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(verifyListFailure(errorMsg));

            });
    }

}


const documentStepOneSaveRequest = () => {
    return {
        type: DOCUMENT_STEP_ONE_SAVE_REQUEST
    }
}


const documentStepOneSaveSuccess = (response) => {
    return {
        type: DOCUMENT_STEP_ONE_SAVE_SUCCESS,
        payload: response
    }
}

const documentStepOneSaveFailure = (response) => {
    return {
        type: DOCUMENT_STEP_ONE_SAVE_FAILURE,
        payload: response
    }
}

export const documentStepOneSave = (reqData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(documentStepOneSaveRequest())
        await axios.post(`${config.apiUrl}/front/users/verify_account`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    dispatch(toggleDocumentDetailModal(false));
                    dispatch(toggleDocumentUploadModal(true));

                    dispatch(documentStepOneSaveSuccess(serverResponse.id));

                }
                else {
                    dispatch(documentStepOneSaveFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(documentStepOneSaveFailure(errorMsg));

            });
    }

}


const docUploadRequest = () => {
    return {
        type: DOC_UPLOAD_REQUEST
    }
}

const docUploadSuccess = (response) => {
    return {
        type: DOC_UPLOAD_SUCCESS,
        payload: response
    }
}

const docUploadFailure = (response) => {
    return {
        type: DOC_UPLOAD_FAILURE,
        payload: response
    }
}



export const docUpload = (file) => {

    const saveData = new FormData();
    saveData.append('doc', file);
    saveData.append('token', JSON.parse(localStorage.getItem('stashGuruToken')));
    saveData.append('doc_id', store.getState().document.currentDocumentId);


    return async (dispatch) => {
        dispatch(docUploadRequest())
        await axios.post(`${config.apiUrl}/front/users/verify_doc`, saveData)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(docUploadSuccess(serverResponse.doc));

                }
                else {
                    dispatch(docUploadFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(docUploadFailure(errorMsg));

            });
    }

}

