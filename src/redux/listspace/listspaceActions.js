import { GET_COORDINATES_FAILURE, GET_COORDINATES_REQUEST, GET_COORDINATES_SUCCESS, SPACE_TYPE_FAILURE, SPACE_TYPE_REQUEST, SPACE_TYPE_SUCCESS, SPACE_USED_FOR_REQUEST, SPACE_USED_FOR_SUCCESS, STEP_ONE_SAVE, STEP_TWO_SAVE, SPACE_USED_FOR_FAILURE, FEATURE_REQUEST, FEATURE_SUCCESS, FEATURE_FAILURE, FLOOR_REQUEST, FLOOR_SUCCESS, FLOOR_FAILURE, STEP_THREE_SAVE_REQUEST, STEP_THREE_SAVE_SUCCESS, STEP_THREE_SAVE_FAILURE, CLEAR_MESSAGE_FIELDS, STEP_THREE_UPDATE_CLIENT, STEP_FOUR_UPDATE_CLIENT, STEP_FOUR_SAVE_REQUEST, STEP_FOUR_SAVE_SUCCESS, STEP_FOUR_SAVE_FAILURE, GET_PRICE_PERCENTAGE_REQUEST, GET_PRICE_PERCENTAGE_SUCCESS, GET_PRICE_PERCENTAGE_FAILURE, UNIT_REQUEST, UNIT_SUCCESS, UNIT_FAILURE, STEP_FIVE_SAVE_REQUEST, STEP_FIVE_SAVE_SUCCESS, STEP_FIVE_SAVE_FAILURE, STEP_FIVE_UPDATE_CLIENT, UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_FAILURE, LIST_DETAIL_REQUEST, LIST_DETAIL_SUCCESS, LIST_DETAIL_FAILURE, CAPTION_UPDATE_REQUEST, CAPTION_UPDATE_SUCCESS, CAPTION_UPDATE_FAILURE, STEP_SIX_UPDATE_CLIENT, PUBLISH_REQUEST, PUBLISH_SUCCESS, PUBLISH_FAILURE, CLEAR_LIST_SPACE_STEPS, LIST_ALL_SPACE_REQUEST, LIST_ALL_SPACE_SUCCESS, LIST_ALL_SPACE_FAILURE, DRAFT_STATUS_REQUEST, DRAFT_STATUS_SUCCESS, DRAFT_STATUS_FAILURE, GUEST_REQUEST, GUEST_SUCCESS, GUEST_FAILURE, GUEST_ACCESS_REQUEST, GUEST_ACCESS_SUCCESS, GUEST_ACCESS_FAILURE, UPDATE_COORDINATES_CLIENT, SET_MANUAL_COORDINATES, ADDRESS_REQUEST, ADDRESS_SUCCESS, ADDRESS_FAILURE, STEP_SEVEN_UPDATE_CLIENT } from "./listspaceTypes"
import axios from 'axios'
import { config } from '../../config/config';
import store from '../store';
import Swal from 'sweetalert2';

export const stepOneSave = (response) => {

    localStorage.setItem("listStepOne", JSON.stringify(response));

    return {
        type: STEP_ONE_SAVE,
        payload: response
    }
}


export const stepTwoSave = (response, redirect = "") => {

    localStorage.setItem("listStepTwo", JSON.stringify(response));

    if (redirect) {
        console.log('redirect is true' + redirect);
        window.location.href = redirect;
    }

    return {
        type: STEP_TWO_SAVE,
        payload: response
    }
}

const spaceTypeRequest = () => {
    return {
        type: SPACE_TYPE_REQUEST
    }
}

const spaceTypeSuccess = (response) => {

    return {
        type: SPACE_TYPE_SUCCESS,
        payload: response
    }

}


const spaceTypeFailure = (response) => {

    return {
        type: SPACE_TYPE_FAILURE,
        payload: response
    }

}


export const getSpaceType = (resetData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(spaceTypeRequest())
        await axios.post(`${config.apiUrl}/front/list/storage_type`, resetData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    // let responseData = {
                    //     data: serverResponse.data,
                    //     message: serverResponse.message
                    // };

                    dispatch(spaceTypeSuccess(serverResponse.list));

                }
                else {
                    dispatch(spaceTypeFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(spaceTypeFailure(errorMsg));

            });
    }

}




const spaceUsedForRequest = () => {
    return {
        type: SPACE_USED_FOR_REQUEST
    }
}

const spaceUsedForSuccess = (response) => {

    return {
        type: SPACE_USED_FOR_SUCCESS,
        payload: response
    }

}


const spaceUsedForFailure = (response) => {

    return {
        type: SPACE_USED_FOR_FAILURE,
        payload: response
    }

}


export const getSpaceUsedFor = () => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(spaceUsedForRequest())
        await axios.post(`${config.apiUrl}/front/list/storage_used_type`, {}, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    // let responseData = {
                    //     data: serverResponse.data,
                    //     message: serverResponse.message
                    // };

                    dispatch(spaceUsedForSuccess(serverResponse.list));

                }
                else {
                    dispatch(spaceUsedForFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(spaceUsedForFailure(errorMsg));

            });
    }

}



const featureRequest = () => {
    return {
        type: FEATURE_REQUEST
    }
}

const featureSuccess = (response) => {

    return {
        type: FEATURE_SUCCESS,
        payload: response
    }

}


const featureFailure = (response) => {

    return {
        type: FEATURE_FAILURE,
        payload: response
    }

}


export const getFeatures = () => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(featureRequest())
        await axios.post(`${config.apiUrl}/front/list/features`, {}, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    // let responseData = {
                    //     data: serverResponse.data,
                    //     message: serverResponse.message
                    // };

                    dispatch(featureSuccess(serverResponse.list));

                }
                else {
                    dispatch(featureFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(featureFailure(errorMsg));

            });
    }

}






const floorRequest = () => {
    return {
        type: FLOOR_REQUEST
    }
}

const floorSuccess = (response) => {

    return {
        type: FLOOR_SUCCESS,
        payload: response
    }

}


const floorFailure = (response) => {

    return {
        type: FLOOR_FAILURE,
        payload: response
    }

}


export const getFloors = () => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(floorRequest())
        await axios.post(`${config.apiUrl}/front/list/floor`, {}, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    // let responseData = {
                    //     data: serverResponse.data,
                    //     message: serverResponse.message
                    // };

                    dispatch(floorSuccess(serverResponse.list));

                }
                else {
                    dispatch(floorFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(floorFailure(errorMsg));

            });
    }

}







const stepThreeSaveRequest = () => {
    return {
        type: STEP_THREE_SAVE_REQUEST
    }
}

const stepThreeSaveSuccess = (response) => {

    return {
        type: STEP_THREE_SAVE_SUCCESS,
        payload: response
    }

}


const stepThreeSaveFailure = (response) => {

    return {
        type: STEP_THREE_SAVE_FAILURE,
        payload: response
    }

}


const updateStepThreeClient = (response) => {
    return {
        type: STEP_THREE_UPDATE_CLIENT,
        payload: response
    }
}




export const stepThreeSave = (saveData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(stepThreeSaveRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/create`, saveData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    let stepThreeId = serverResponse.insertId;

                    saveData.id = stepThreeId;

                    let stepThreeData = saveData;

                    localStorage.setItem("listStepThree", JSON.stringify(stepThreeData));


                    // step others

                    let stepOne = store.getState().listspace.stepOne;
                    stepOne.id = stepThreeId;
                    stepOne.spaceType = saveData.type;
                    dispatch(stepOneSave(stepOne));

                    let stepTwo = store.getState().listspace.stepTwo;
                    stepTwo.id = stepThreeId;
                    dispatch(stepTwoSave(stepTwo));

                    // step others end




                    dispatch(updateStepThreeClient(stepThreeData));

                    dispatch(stepThreeSaveSuccess(serverResponse.message));

                }
                else {
                    dispatch(stepThreeSaveFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(stepThreeSaveFailure(errorMsg));

            });
    }

}




export const stepThreeUpdate = (saveData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(stepThreeSaveRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/update`, saveData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    let stepThreeId = serverResponse.storeid;

                    saveData.id = stepThreeId;

                    let stepThreeData = saveData;

                    localStorage.setItem("listStepThree", JSON.stringify(stepThreeData));


                    let stepOne = store.getState().listspace.stepOne;
                    stepOne.id = stepThreeId;
                    stepOne.spaceType = saveData.type;
                    dispatch(stepOneSave(stepOne));


                    dispatch(updateStepThreeClient(stepThreeData));

                    dispatch(stepThreeSaveSuccess(serverResponse.message));

                }
                else {
                    dispatch(stepThreeSaveFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(stepThreeSaveFailure(errorMsg));

            });
    }

}






const getCoordinateRequest = () => {
    return {
        type: GET_COORDINATES_REQUEST
    }
}

const getCoordinateSuccess = (response) => {
    return {
        type: GET_COORDINATES_SUCCESS,
        payload: response
    }
}

const getCoordinateFailure = (response) => {
    return {
        type: GET_COORDINATES_FAILURE,
        payload: response
    }
}


const setManualCoordinates = (response) => {
    return {
        type: SET_MANUAL_COORDINATES,
        payload: response
    }
}


export const getCoordinates = (address, manual = false, manualData = null) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(getCoordinateRequest())
        await axios.post(`${config.apiUrl}/front/map/lat_and_long`, address, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(getAddress({
                        lat: serverResponse.list.latitude,
                        long: serverResponse.list.longitude
                    }));

                    if (manual) {
                        dispatch(stepTwoSave(manualData));
                        window.location.href = "/create-your-list-step3";
                    }
                    else {
                        dispatch(getCoordinateSuccess(serverResponse.list));
                    }



                }
                else {
                    dispatch(getCoordinateFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(getCoordinateFailure(errorMsg));

            });
    }

}

export const clearlistSpaceMessageFields = () => {

    return {
        type: CLEAR_MESSAGE_FIELDS
    }

}








const stepFourSaveRequest = () => {
    return {
        type: STEP_FOUR_SAVE_REQUEST
    }
}

const stepFourSaveSuccess = (response) => {

    return {
        type: STEP_FOUR_SAVE_SUCCESS,
        payload: response
    }

}


const stepFourSaveFailure = (response) => {

    return {
        type: STEP_FOUR_SAVE_FAILURE,
        payload: response
    }

}


const updateStepFourClient = (response) => {

    return {
        type: STEP_FOUR_UPDATE_CLIENT,
        payload: response
    }
}


export const stepFourSave = (saveData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(stepFourSaveRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/description`, saveData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    let stepThreeId = serverResponse.insertId;

                    saveData.id = stepThreeId;

                    let stepFourData = saveData;

                    localStorage.setItem("listStepFour", JSON.stringify(stepFourData));

                    dispatch(updateStepFourClient(stepFourData));

                    dispatch(stepFourSaveSuccess(serverResponse.message));

                }
                else {
                    dispatch(stepFourSaveFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(stepFourSaveFailure(errorMsg));

            });
    }

}








const getPricePercentageRequest = () => {
    return {
        type: GET_PRICE_PERCENTAGE_REQUEST
    }
}

const getPricePercentageSuccess = (response) => {

    return {
        type: GET_PRICE_PERCENTAGE_SUCCESS,
        payload: response
    }

}


const getPricePercentageFailure = (response) => {

    return {
        type: GET_PRICE_PERCENTAGE_FAILURE,
        payload: response
    }

}


export const getPricePercentage = () => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(getPricePercentageRequest())
        await axios.post(`${config.apiUrl}/front/settings/price_percentage`, {}, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(getPricePercentageSuccess(serverResponse.percentage));

                }
                else {
                    dispatch(getPricePercentageFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(getPricePercentageFailure(errorMsg));

            });
    }

}





const unitRequest = () => {
    return {
        type: UNIT_REQUEST
    }
}

const unitSuccess = (response) => {
    return {
        type: UNIT_SUCCESS,
        payload: response
    }
}

const unitFailure = (response) => {
    return {
        type: UNIT_FAILURE,
        payload: response
    }
}





export const getUnits = () => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(unitRequest())
        await axios.post(`${config.apiUrl}/front/list/measurement_unit`, {}, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    // if (manual) {
                    // serverResponse.list.manual = true;
                    // }

                    dispatch(unitSuccess(serverResponse.list));

                }
                else {
                    dispatch(unitFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(unitFailure(errorMsg));

            });
    }

}







const stepFiveSaveRequest = () => {
    return {
        type: STEP_FIVE_SAVE_REQUEST
    }
}

const stepFiveSaveSuccess = (response) => {
    return {
        type: STEP_FIVE_SAVE_SUCCESS,
        payload: response
    }
}

const stepFiveSaveFailure = (response) => {
    return {
        type: STEP_FIVE_SAVE_FAILURE,
        payload: response
    }
}

const stepFiveUpdateClient = (response) => {

    localStorage.setItem("listStepFive", JSON.stringify(response));

    return {
        type: STEP_FIVE_UPDATE_CLIENT,
        payload: response
    }
}



export const stepFiveSave = (saveData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(stepFiveSaveRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/estimation`, saveData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    saveData.id = serverResponse.storeid;

                    dispatch(stepFiveUpdateClient(saveData));
                    dispatch(stepFiveSaveSuccess(serverResponse.storeid));

                }
                else {
                    dispatch(stepFiveSaveFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(stepFiveSaveFailure(errorMsg));

            });
    }

}






const uploadRequest = () => {
    return {
        type: UPLOAD_REQUEST
    }
}

const uploadSuccess = (response) => {
    return {
        type: UPLOAD_SUCCESS,
        payload: response
    }
}

const uploadFailure = (response) => {
    return {
        type: UPLOAD_FAILURE,
        payload: response
    }
}



export const uploadImageFile = (file, id) => {

    const saveData = new FormData();
    saveData.append('image', file);
    saveData.append('token', JSON.parse(localStorage.getItem('stashGuruToken')));
    saveData.append('id', id);

    const requestConfig = {
        'Content-Type': 'multipart/form-data'
    };

    return async (dispatch) => {
        dispatch(uploadRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/image`, saveData)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(uploadSuccess(serverResponse.storeid));
                    dispatch(getListDetails({
                        id: id,
                        token: JSON.parse(localStorage.getItem("stashGuruToken"))
                    }));

                }
                else {
                    dispatch(uploadFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(uploadFailure(errorMsg));

            });
    }

}






const listDetailRequest = () => {
    return {
        type: LIST_DETAIL_REQUEST
    }
}

const listDetailSuccess = (response) => {
    return {
        type: LIST_DETAIL_SUCCESS,
        payload: response
    }
}

const listDetailFailure = (response) => {
    return {
        type: LIST_DETAIL_FAILURE,
        payload: response
    }
}




export const getListDetails = (saveData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(listDetailRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/details`, saveData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    let detailData = {
                        details: serverResponse.details,
                        features: serverResponse.features,
                        images: serverResponse.images,
                        measurement_unit: serverResponse.measurement_unit,
                        used_type: serverResponse.used_type
                    };

                    dispatch(listDetailSuccess(detailData));

                }
                else {
                    dispatch(listDetailFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(listDetailFailure(errorMsg));

            });
    }

}






const updateCaptionRequest = () => {
    return {
        type: CAPTION_UPDATE_REQUEST
    }
}

const updateCaptionSuccess = (response) => {
    return {
        type: CAPTION_UPDATE_SUCCESS,
        payload: response
    }
}

const updateCaptionFailure = (response) => {
    return {
        type: CAPTION_UPDATE_FAILURE,
        payload: response
    }
}




export const updateCaption = (saveData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(updateCaptionRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/image_caption`, saveData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(updateCaptionSuccess(serverResponse.storeid));

                }
                else {
                    dispatch(updateCaptionFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(updateCaptionFailure(errorMsg));

            });
    }

}

export const stepSixUpdateClient = (response) => {


    localStorage.setItem("listStepSix", JSON.stringify(response));

    return {
        type: STEP_SIX_UPDATE_CLIENT,
        payload: response
    }
}




const publishRequest = () => {
    return {
        type: PUBLISH_REQUEST
    }
}

const publishSuccess = (response) => {
    return {
        type: PUBLISH_SUCCESS,
        payload: response
    }
}


const publishFailure = (response) => {
    return {
        type: PUBLISH_FAILURE,
        payload: response
    }
}

export const publishSpace = (saveData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(publishRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/publish`, saveData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    if (store.getState().auth.authResponse.users.verify === "Yes") {


                        dispatch(publishSuccess(serverResponse.storeid));
                        dispatch(clearListSpaceSteps());
                        dispatch(clearlistSpaceMessageFields());
                        window.location.href = "/listing";


                    }
                    else {


                        Swal.fire({
                            title: 'Verification required!',
                            text: "Your account is not verified. Please verify account before publish!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, Verify',
                            cancelButtonText: 'Skip & Save'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "/verification";
                            }

                            else if (result.dismiss === "cancel") {

                                dispatch(publishSuccess(serverResponse.storeid));
                                dispatch(clearListSpaceSteps());
                                dispatch(clearlistSpaceMessageFields());
                                window.location.href = "/listing";

                            }
                            else if (result.dismiss === "backdrop") {
                                // alert("backdrop");
                                dispatch(publishFailure(""));
                            }
                        })


                    }





                }
                else {
                    dispatch(publishFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(publishFailure(errorMsg));

            });
    }

}


export const clearListSpaceSteps = () => {

    localStorage.removeItem("listStepOne");
    localStorage.removeItem("listStepTwo");
    localStorage.removeItem("listStepThree");
    localStorage.removeItem("listStepFour");
    localStorage.removeItem("listStepFive");
    localStorage.removeItem("listStepSix");
    localStorage.removeItem("listStepSeven");

    return {
        type: CLEAR_LIST_SPACE_STEPS
    }
}






const listAllSpaceRequest = () => {
    return {
        type: LIST_ALL_SPACE_REQUEST
    }
}

const listAllSpaceSuccess = (response) => {
    return {
        type: LIST_ALL_SPACE_SUCCESS,
        payload: response
    }
}


const listAllSpaceFailure = (response) => {
    return {
        type: LIST_ALL_SPACE_FAILURE,
        payload: response
    }
}

export const listAllSpace = (saveData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(listAllSpaceRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/all`, saveData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(listAllSpaceSuccess(serverResponse.list));

                }
                else {
                    dispatch(listAllSpaceFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(listAllSpaceFailure(errorMsg));

            });
    }

}






const draftStatusRequest = () => {
    return {
        type: DRAFT_STATUS_REQUEST
    }
}

const draftStatusSuccess = (response) => {
    return {
        type: DRAFT_STATUS_SUCCESS,
        payload: response
    }
}


const draftStatusFailure = (response) => {
    return {
        type: DRAFT_STATUS_FAILURE,
        payload: response
    }
}

export const getDraftStatus = (data) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(draftStatusRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/draft_status`, data, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(draftStatusSuccess(serverResponse.list));

                    let stepNo = serverResponse.details.draft_step;
                    let storeId = serverResponse.details.store_id;
                    let redirect_url = "";


                    switch (+stepNo) {
                        case 1:
                            redirect_url = "/create-your-list";
                            break;

                        case 2:
                            redirect_url = "/create-your-list-step3";
                            break;

                        case 3:
                            redirect_url = "/create-your-list-step4";
                            break;

                        case 4:
                            redirect_url = "/create-your-list-step5";
                            break;

                        case 5:
                            redirect_url = "/create-your-list-step6";
                            break;

                        case 6:
                            redirect_url = "/create-your-list-step7";
                            break;

                        default:
                            break;
                    }



                    dispatch(setListDetailClient(storeId, redirect_url));



                }
                else {
                    dispatch(draftStatusFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(draftStatusFailure(errorMsg));

            });
    }

}


export const stepSevenUpdateClient = (response) => {

    localStorage.setItem("listStepSeven", JSON.stringify(response));

    return {
        type: STEP_SEVEN_UPDATE_CLIENT,
        payload: response
    }
}

export const setListDetailClient = (id, redirect_url = "") => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    let saveData = {
        id: id,
        token: JSON.parse(localStorage.getItem("stashGuruToken"))
    };

    return async (dispatch) => {
        dispatch(listDetailRequest())
        await axios.post(`${config.apiUrl}/front/list_your_space/details`, saveData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    let stepOne = {
                        id: serverResponse.details.store_id,
                        location: `${serverResponse.details.store_street}, ${serverResponse.details.store_address1}, ${serverResponse.details.store_address2}, ${serverResponse.details.store_city}, ${serverResponse.details.store_postcode} `,
                        spaceType: serverResponse.details.st_id
                    };

                    dispatch(stepOneSave(stepOne));

                    let stepTwo = {
                        address1: serverResponse.details.store_address1,
                        address2: serverResponse.details.store_address2,
                        city: serverResponse.details.store_city,
                        house_no: serverResponse.details.store_street,
                        id: serverResponse.details.store_id,
                        lat: serverResponse.details.store_lat,
                        lng: serverResponse.details.store_long,
                        postal_code: serverResponse.details.store_postcode
                    };

                    dispatch(stepTwoSave(stepTwo));

                    // let featureInfo = serverResponse.details.features && serverResponse.details.features.length > 0 ? serverResponse.details.features[0].sf_id : "";    


                    let featureList = serverResponse.features.map((ft) => {
                        return ft.fs_id;
                    });




                    let stepThree = {

                        address1: serverResponse.details.store_address1,
                        address2: serverResponse.details.store_address2,
                        city: serverResponse.details.store_city,
                        features: featureList.join(','),
                        floor: serverResponse.details.fl_id,
                        id: serverResponse.details.store_id,
                        keyStatus: serverResponse.details.store_key,
                        lat: serverResponse.details.store_lat,
                        lng: serverResponse.details.store_long,
                        postcode: serverResponse.details.store_postcode,
                        street: serverResponse.details.store_street,
                        title: serverResponse.details.store_title,
                        token: JSON.parse(localStorage.getItem("stashGuruToken")),
                        type: serverResponse.details.st_id,
                        used_type: serverResponse.used_type.map(sut => sut.suts_id).join(","),
                        guest: serverResponse.details.gt_id,
                        guest_access: serverResponse.details.gta_id,
                        specific_time: JSON.parse(serverResponse.details.store_specific_time)

                    };

                    localStorage.setItem("listStepThree", JSON.stringify(stepThree));

                    dispatch(updateStepThreeClient(stepThree));


                    let stepFour = {
                        description: serverResponse.details.store_description ? serverResponse.details.store_description : "",
                        token: JSON.parse(localStorage.getItem("stashGuruToken")),
                        extra_data: serverResponse.details.store_extra_fields,
                        security: serverResponse.details.store_security,
                        location: serverResponse.details.store_location,
                        access: serverResponse.details.store_access,
                        hosting: serverResponse.details.store_hosting
                    };


                    localStorage.setItem("listStepFour", JSON.stringify(stepFour));

                    // dispatch(updateStepFourClient(stepFour));

                    let storeSize = JSON.parse(serverResponse.details.store_total_size);
                    let storeWidth = storeSize && storeSize.length > 0 ? storeSize[0].width : 0;
                    let storeHeight = storeSize && storeSize.length > 0 ? storeSize[0].height : 0;
                    let storeDepth = storeSize && storeSize.length > 0 ? storeSize[0].depth : 0;


                    let stepFive = {
                        depth: storeDepth,
                        flexible: serverResponse.details.is_flexible,
                        height: storeHeight,
                        id: serverResponse.details.store_id,
                        instant: serverResponse.details.is_instant,
                        price: serverResponse.details.store_cost,
                        token: JSON.parse(localStorage.getItem("stashGuruToken")),
                        total_size: +storeWidth * +storeHeight * +storeDepth,
                        width: storeWidth,
                        your_earnings: serverResponse.details.store_earnings_deposit,
                        security: serverResponse.details.store_security_deposit,
                        security_price: serverResponse.details.store_security_deposit_price,
                        mu_id: serverResponse.details.mu_id,
                        mu_name: serverResponse.measurement_unit.mu_name
                    };

                    dispatch(stepFiveUpdateClient(stepFive));

                    let stepSix = {
                        id: serverResponse.details.store_id
                    };

                    dispatch(stepSixUpdateClient(stepSix));


                    let stepSeven = {
                        id: serverResponse.details.store_id,
                        about: serverResponse.details.u_about,
                        vat: serverResponse.details.store_vat

                    };

                    dispatch(stepSevenUpdateClient(stepSeven));

                    if (redirect_url) {
                        window.location.href = redirect_url;
                    }

                }
                else {
                    dispatch(listDetailFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(listDetailFailure(errorMsg));

            });
    }

}



const guestRequest = () => {
    return {
        type: GUEST_REQUEST
    }
}

const guestSuccess = (response) => {

    return {
        type: GUEST_SUCCESS,
        payload: response
    }

}


const guestFailure = (response) => {

    return {
        type: GUEST_FAILURE,
        payload: response
    }

}


export const getGuests = () => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(guestRequest())
        await axios.post(`${config.apiUrl}/front/list/guest`, {}, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    // let responseData = {
                    //     data: serverResponse.data,
                    //     message: serverResponse.message
                    // };

                    dispatch(guestSuccess(serverResponse.list));

                }
                else {
                    dispatch(guestFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(guestFailure(errorMsg));

            });
    }

}






const guestAccessRequest = () => {
    return {
        type: GUEST_ACCESS_REQUEST
    }
}

const guestAccessSuccess = (response) => {

    return {
        type: GUEST_ACCESS_SUCCESS,
        payload: response
    }

}


const guestAccessFailure = (response) => {

    return {
        type: GUEST_ACCESS_FAILURE,
        payload: response
    }

}


export const getGuestAccess = () => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(guestAccessRequest())
        await axios.post(`${config.apiUrl}/front/list/guest_access`, {}, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    // let responseData = {
                    //     data: serverResponse.data,
                    //     message: serverResponse.message
                    // };

                    dispatch(guestAccessSuccess(serverResponse.list));

                }
                else {
                    dispatch(guestAccessFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(guestAccessFailure(errorMsg));

            });
    }

}


export const updateCoordinatesClient = (coordinates) => {

    return {
        type: UPDATE_COORDINATES_CLIENT,
        payload: coordinates
    }

}




const addressRequest = () => {
    return {
        type: ADDRESS_REQUEST
    }
}

const addressSuccess = (response) => {

    return {
        type: ADDRESS_SUCCESS,
        payload: response
    }

}


const addressFailure = (response) => {

    return {
        type: ADDRESS_FAILURE,
        payload: response
    }

}


export const getAddress = (coordinates) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(addressRequest())
        await axios.post(`${config.apiUrl}/front/map/address`, coordinates, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(addressSuccess(serverResponse));

                }
                else {
                    dispatch(addressFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(addressFailure(errorMsg));

            });
    }

}
