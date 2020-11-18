import { FEATURE_FAILURE, FEATURE_REQUEST, FEATURE_SUCCESS, FLOOR_FAILURE, FLOOR_REQUEST, FLOOR_SUCCESS, GET_COORDINATES_FAILURE, GET_COORDINATES_REQUEST, GET_COORDINATES_SUCCESS, SPACE_TYPE_FAILURE, SPACE_TYPE_REQUEST, SPACE_TYPE_SUCCESS, SPACE_USED_FOR_FAILURE, SPACE_USED_FOR_REQUEST, SPACE_USED_FOR_SUCCESS, STEP_ONE_SAVE, STEP_THREE_SAVE_FAILURE, STEP_THREE_SAVE_REQUEST, STEP_THREE_SAVE_SUCCESS, STEP_TWO_SAVE } from "./listspaceTypes";

const initialState = {

    stepOne: localStorage.getItem("listStepOne") ? JSON.parse(localStorage.getItem("listStepOne")) : {
        spaceType: "",
        location: ""
    },

    stepTwo: localStorage.getItem("listStepTwo") ? JSON.parse(localStorage.getItem("listStepTwo")) : {
        house_no: "",
        address1: "",
        address2: "",
        city: "",
        postal_code: "",
        lat: "",
        lng: ""
    },

    stepThreeLoading: false,
    stepThreeSuccess: "",
    stepThreeError: "",



    spaceTypeListLoading: false,
    spaceTypeList: [],
    spaceTypeListError: "",


    coordinatesLoading: false,
    coordinates: "",
    coordinatesError: "",


    spaceUsedForLoading: false,
    spaceUsedForList: "",
    spaceUsedForError: "",


    featuresLoading: false,
    featuresList: "",
    featuresError: "",


    floorsLoading: false,
    floorsList: "",
    floorsError: ""


}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case STEP_ONE_SAVE:
            return {
                ...state,
                stepOne: action.payload
            }

        case STEP_TWO_SAVE:
            return {
                ...state,
                stepTwo: action.payload
            }

        case SPACE_TYPE_REQUEST:
            return {
                ...state,
                spaceTypeListLoading: true
            }

        case SPACE_TYPE_SUCCESS:
            return {
                ...state,
                spaceTypeListLoading: false,
                spaceTypeList: action.payload
            }

        case SPACE_TYPE_FAILURE:
            return {
                ...state,
                spaceTypeListLoading: false,
                spaceTypeListError: action.payload
            }

        case GET_COORDINATES_REQUEST:
            return {
                ...state,
                coordinatesError: "",
                coordinates: "",
                coordinatesLoading: true
            }

        case GET_COORDINATES_SUCCESS:
            return {
                ...state,
                coordinatesLoading: false,
                coordinates: action.payload
            }

        case GET_COORDINATES_FAILURE:
            return {
                ...state,
                coordinatesLoading: false,
                coordinatesError: action.payload
            }


        case SPACE_USED_FOR_REQUEST:
            return {
                ...state,
                spaceUsedForLoading: true
            }

        case SPACE_USED_FOR_SUCCESS:
            return {
                ...state,
                spaceUsedForLoading: false,
                spaceUsedForList: action.payload
            }

        case SPACE_USED_FOR_FAILURE:
            return {
                ...state,
                spaceUsedForLoading: false,
                spaceUsedForError: action.payload
            }

        case FEATURE_REQUEST:
            return {
                ...state,
                featuresLoading: true
            }


        case FEATURE_SUCCESS:
            return {
                ...state,
                featuresLoading: false,
                featuresList: action.payload
            }

        case FEATURE_FAILURE:
            return {
                ...state,
                featuresLoading: false,
                featuresError: action.payload
            }

        case FLOOR_REQUEST:
            return {
                ...state,
                floorsLoading: true
            }


        case FLOOR_SUCCESS:
            return {
                ...state,
                floorsLoading: false,
                floorsList: action.payload
            }

        case FLOOR_FAILURE:
            return {
                ...state,
                floorsLoading: false,
                floorsError: action.payload
            }


        case STEP_THREE_SAVE_REQUEST:
            return {
                ...state,
                stepThreeLoading: true,
                stepThreeError: "",
                stepThreeSuccess: ""
            }


        case STEP_THREE_SAVE_SUCCESS:
            return {
                ...state,
                stepThreeLoading: false,
                stepThreeSuccess: action.payload
            }

        case STEP_THREE_SAVE_FAILURE:
            return {
                ...state,
                stepThreeLoading: false,
                stepThreeError: action.payload
            }





        default:
            return state;
    }

}

export default reducer; 