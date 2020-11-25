import { ADDRESS_FAILURE, ADDRESS_REQUEST, ADDRESS_SUCCESS, CAPTION_UPDATE_FAILURE, CAPTION_UPDATE_REQUEST, CAPTION_UPDATE_SUCCESS, CLEAR_LIST_SPACE_STEPS, CLEAR_MESSAGE_FIELDS, DRAFT_STATUS_FAILURE, DRAFT_STATUS_REQUEST, DRAFT_STATUS_SUCCESS, FEATURE_FAILURE, FEATURE_REQUEST, FEATURE_SUCCESS, FLOOR_FAILURE, FLOOR_REQUEST, FLOOR_SUCCESS, GET_COORDINATES_FAILURE, GET_COORDINATES_REQUEST, GET_COORDINATES_SUCCESS, GET_PRICE_PERCENTAGE_FAILURE, GET_PRICE_PERCENTAGE_REQUEST, GET_PRICE_PERCENTAGE_SUCCESS, GUEST_ACCESS_FAILURE, GUEST_ACCESS_REQUEST, GUEST_ACCESS_SUCCESS, GUEST_FAILURE, GUEST_REQUEST, GUEST_SUCCESS, LIST_ALL_SPACE_FAILURE, LIST_ALL_SPACE_REQUEST, LIST_ALL_SPACE_SUCCESS, LIST_DETAIL_FAILURE, LIST_DETAIL_REQUEST, LIST_DETAIL_SUCCESS, PUBLISH_FAILURE, PUBLISH_REQUEST, PUBLISH_SUCCESS, SET_MANUAL_COORDINATES, SPACE_TYPE_FAILURE, SPACE_TYPE_REQUEST, SPACE_TYPE_SUCCESS, SPACE_USED_FOR_FAILURE, SPACE_USED_FOR_REQUEST, SPACE_USED_FOR_SUCCESS, STEP_FIVE_SAVE_FAILURE, STEP_FIVE_SAVE_REQUEST, STEP_FIVE_SAVE_SUCCESS, STEP_FIVE_UPDATE_CLIENT, STEP_FOUR_SAVE_FAILURE, STEP_FOUR_SAVE_REQUEST, STEP_FOUR_SAVE_SUCCESS, STEP_FOUR_UPDATE_CLIENT, STEP_ONE_SAVE, STEP_SEVEN_UPDATE_CLIENT, STEP_SIX_UPDATE_CLIENT, STEP_THREE_SAVE_FAILURE, STEP_THREE_SAVE_REQUEST, STEP_THREE_SAVE_SUCCESS, STEP_THREE_UPDATE_CLIENT, STEP_TWO_SAVE, UNIT_FAILURE, UNIT_REQUEST, UNIT_SUCCESS, UPDATE_COORDINATES_CLIENT, UPLOAD_FAILURE, UPLOAD_REQUEST, UPLOAD_SUCCESS } from "./listspaceTypes";

const initialState = {

    stepOne: localStorage.getItem("listStepOne") ? JSON.parse(localStorage.getItem("listStepOne")) : "",

    stepTwo: localStorage.getItem("listStepTwo") ? JSON.parse(localStorage.getItem("listStepTwo")) : "",

    stepThree: localStorage.getItem("listStepThree") ? JSON.parse(localStorage.getItem("listStepThree")) : "",

    stepFour: localStorage.getItem("listStepFour") ? JSON.parse(localStorage.getItem("listStepFour")) : "",

    stepFive: localStorage.getItem("listStepFive") ? JSON.parse(localStorage.getItem("listStepFive")) : "",

    stepSix: localStorage.getItem("listStepSix") ? JSON.parse(localStorage.getItem("listStepSix")) : "",

    stepSeven: localStorage.getItem("listStepSeven") ? JSON.parse(localStorage.getItem("listStepSeven")) : "",

    stepThreeLoading: false,
    stepThreeSuccess: "",
    stepThreeError: "",

    stepFourLoading: false,
    stepFourSuccess: "",
    stepFourError: "",

    stepFiveLoading: false,
    stepFiveSuccess: "",
    stepFiveError: "",

    spaceTypeListLoading: false,
    spaceTypeList: [],
    spaceTypeListError: "",

    coordinatesLoading: false,
    coordinates: "",
    manualCoordinates: "",
    coordinatesError: "",

    spaceUsedForLoading: false,
    spaceUsedForList: "",
    spaceUsedForError: "",

    featuresLoading: false,
    featuresList: "",
    featuresError: "",

    floorsLoading: false,
    floorsList: "",
    floorsError: "",

    pricePercentageLoading: false,
    pricePercentage: "",
    pricePercentageFailure: "",

    unitLoading: false,
    unitList: "",
    unitError: "",

    uploadLoading: false,
    uploadData: "",
    uploadError: "",


    listDetailLoading: false,
    listDetailData: "",
    listDetailError: "",

    captionUpdateLoading: false,
    captionUpdateSuccess: "",
    captionUpdateError: "",


    publishLoading: false,
    publishSuccess: "",
    publishError: "",

    listAllSpaceLoading: false,
    allSpaceList: "",
    listAllSpaceError: "",

    draftStatusLoading: false,
    draftStatus: "",
    draftStatusError: "",

    guestLoading: false,
    guestList: "",
    guestError: "",

    guestAccessLoading: false,
    guestAccessList: "",
    guestAccessError: "",

    address: "",
    addressLoading: false,
    addressError: ""


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
                stepTwo: action.payload,
                coordinates: ""
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


        case STEP_FOUR_SAVE_REQUEST:
            return {
                ...state,
                stepFourLoading: true,
                stepFourError: "",
                stepFourSuccess: ""
            }


        case STEP_FOUR_SAVE_SUCCESS:
            return {
                ...state,
                stepFourLoading: false,
                stepFourSuccess: action.payload
            }

        case STEP_FOUR_SAVE_FAILURE:
            return {
                ...state,
                stepFourLoading: false,
                stepFourError: action.payload
            }


        case CLEAR_MESSAGE_FIELDS:
            return {
                ...state,
                stepThreeSuccess: "",
                stepFourSuccess: "",
                stepFiveSuccess: ""
            }

        case STEP_THREE_UPDATE_CLIENT:
            return {
                ...state,
                stepThree: action.payload
            }

        case STEP_FOUR_UPDATE_CLIENT:
            return {
                ...state,
                stepFour: action.payload
            }

        case GET_PRICE_PERCENTAGE_REQUEST:
            return {
                ...state,
                pricePercentageLoading: true
            }

        case GET_PRICE_PERCENTAGE_SUCCESS:
            return {
                ...state,
                pricePercentageLoading: false,
                pricePercentage: action.payload
            }

        case GET_PRICE_PERCENTAGE_FAILURE:
            return {
                ...state,
                pricePercentageLoading: false,
                pricePercentageFailure: action.payload
            }

        case UNIT_REQUEST:
            return {
                ...state,
                unitLoading: true
            }

        case UNIT_SUCCESS:
            return {
                ...state,
                unitLoading: false,
                unitList: action.payload
            }

        case UNIT_FAILURE:
            return {
                ...state,
                unitLoading: false,
                unitError: action.payload
            }

        case STEP_FIVE_SAVE_REQUEST:
            return {
                ...state,
                stepFiveLoading: true,
                stepFiveError: "",
                stepFiveSuccess: ""
            }


        case STEP_FIVE_SAVE_SUCCESS:
            return {
                ...state,
                stepFiveLoading: false,
                stepFiveSuccess: action.payload
            }

        case STEP_FIVE_SAVE_FAILURE:
            return {
                ...state,
                stepFiveLoading: false,
                stepFiveError: action.payload
            }

        case STEP_FIVE_UPDATE_CLIENT:
            return {
                ...state,
                stepFive: action.payload
            }

        case UPLOAD_REQUEST:
            return {
                ...state,
                uploadLoading: true
            }

        case UPLOAD_SUCCESS:
            return {
                ...state,
                uploadLoading: false,
                uploadData: action.payload
            }

        case UPLOAD_FAILURE:
            return {
                ...state,
                uploadLoading: false,
                uploadError: action.payload
            }


        case LIST_DETAIL_REQUEST:
            return {
                ...state,
                listDetailLoading: true
            }

        case LIST_DETAIL_SUCCESS:
            return {
                ...state,
                listDetailLoading: false,
                listDetailData: action.payload
            }

        case LIST_DETAIL_FAILURE:
            return {
                ...state,
                listDetailLoading: false,
                listDetailError: action.payload
            }

        case CAPTION_UPDATE_REQUEST:
            return {
                ...state,
                captionUpdateLoading: true
            }

        case CAPTION_UPDATE_SUCCESS:
            return {
                ...state,
                captionUpdateLoading: false,
                captionUpdateSuccess: action.payload
            }

        case CAPTION_UPDATE_FAILURE:
            return {
                ...state,
                captionUpdateLoading: false,
                captionUpdateError: action.payload
            }

        case STEP_SIX_UPDATE_CLIENT:
            return {
                ...state,
                stepSix: action.payload
            }

        case PUBLISH_REQUEST:
            return {
                ...state,
                publishLoading: true
            }

        case PUBLISH_SUCCESS:
            return {
                ...state,
                publishLoading: false,
                publishSuccess: action.payload
            }

        case PUBLISH_FAILURE:
            return {
                ...state,
                publishLoading: false,
                publishError: action.payload
            }

        case CLEAR_LIST_SPACE_STEPS:
            return {
                ...state,
                stepOne: "",
                stepTwo: "",
                stepThree: "",
                stepFour: "",
                stepFive: "",
                stepSix: ""
            }

        case LIST_ALL_SPACE_REQUEST:
            return {
                ...state,
                listAllSpaceLoading: true
            }

        case LIST_ALL_SPACE_SUCCESS:
            return {
                ...state,
                listAllSpaceLoading: false,
                allSpaceList: action.payload
            }

        case LIST_ALL_SPACE_FAILURE:
            return {
                listAllSpaceLoading: false,
                listAllSpaceError: action.payload
            }

        case DRAFT_STATUS_REQUEST:
            return {
                ...state,
                draftStatusLoading: true
            }

        case DRAFT_STATUS_SUCCESS:
            return {
                ...state,
                draftStatusLoading: false,
                draftStatus: action.payload
            }

        case DRAFT_STATUS_FAILURE:
            return {
                ...state,
                draftStatusLoading: false,
                draftStatusError: action.payload
            }

        case GUEST_REQUEST:
            return {
                ...state,
                guestLoading: true
            }

        case GUEST_SUCCESS:
            return {
                ...state,
                guestLoading: false,
                guestList: action.payload
            }

        case GUEST_FAILURE:
            return {
                ...state,
                guestLoading: false,
                guestError: action.payload
            }

        case GUEST_ACCESS_REQUEST:
            return {
                ...state,
                guestAccessLoading: true
            }

        case GUEST_ACCESS_SUCCESS:
            return {
                ...state,
                guestAccessLoading: false,
                guestAccessList: action.payload
            }

        case GUEST_ACCESS_FAILURE:
            return {
                ...state,
                guestAccessLoading: false,
                guestAccessError: action.payload
            }

        case UPDATE_COORDINATES_CLIENT:
            return {
                ...state,
                coordinates: { ...state.coordinates, latitude: action.payload.latitude, longitude: action.payload.longitude }
            }

        case SET_MANUAL_COORDINATES:
            return {
                ...state,
                manualCoordinates: action.payload
            }

        case ADDRESS_REQUEST:
            return {
                ...state,
                addressLoading: true
            }

        case ADDRESS_SUCCESS:
            return {
                ...state,
                addressLoading: false,
                address: action.payload
            }

        case ADDRESS_FAILURE:
            return {
                ...state,
                addressLoading: false,
                addressError: action.payload
            }

        case STEP_SEVEN_UPDATE_CLIENT:
            return {
                ...state,
                stepSeven: action.payload
            }

        default:
            return state;
    }

}

export default reducer; 