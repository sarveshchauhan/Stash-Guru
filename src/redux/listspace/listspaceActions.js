import { GET_COORDINATES_FAILURE, GET_COORDINATES_REQUEST, GET_COORDINATES_SUCCESS, SPACE_TYPE_FAILURE, SPACE_TYPE_REQUEST, SPACE_TYPE_SUCCESS, SPACE_USED_FOR_REQUEST, SPACE_USED_FOR_SUCCESS, STEP_ONE_SAVE, STEP_TWO_SAVE, SPACE_USED_FOR_FAILURE, FEATURE_REQUEST, FEATURE_SUCCESS, FEATURE_FAILURE, FLOOR_REQUEST, FLOOR_SUCCESS, FLOOR_FAILURE, STEP_THREE_SAVE_REQUEST, STEP_THREE_SAVE_SUCCESS, STEP_THREE_SAVE_FAILURE, CLEAR_MESSAGE_FIELDS, STEP_THREE_UPDATE_CLIENT, STEP_FOUR_UPDATE_CLIENT, STEP_FOUR_SAVE_REQUEST, STEP_FOUR_SAVE_SUCCESS, STEP_FOUR_SAVE_FAILURE, GET_PRICE_PERCENTAGE_REQUEST, GET_PRICE_PERCENTAGE_SUCCESS, GET_PRICE_PERCENTAGE_FAILURE } from "./listspaceTypes"
import axios from 'axios'
import { config } from '../../config/config';



export const stepOneSave = (response) => {

    sessionStorage.setItem("listStepOne", JSON.stringify(response));

    return {
        type: STEP_ONE_SAVE,
        payload: response
    }
}


export const stepTwoSave = (response) => {

    sessionStorage.setItem("listStepTwo", JSON.stringify(response));

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

                    sessionStorage.setItem("listStepThree", JSON.stringify(stepThreeData));

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

                    sessionStorage.setItem("listStepThree", JSON.stringify(stepThreeData));

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





export const getCoordinates = (address, manual = false) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(getCoordinateRequest())
        await axios.post(`${config.apiUrl}/front/map/lat_and_long`, address, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    if (manual) {
                        serverResponse.list.manual = true;
                    }

                    dispatch(getCoordinateSuccess(serverResponse.list));

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

                    sessionStorage.setItem("listStepFour", JSON.stringify(stepFourData));

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
