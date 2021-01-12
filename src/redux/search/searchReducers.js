import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_DETAILS_REQUEST, SEARCH_DETAILS_SUCCESS, SEARCH_DETAILS_FAILURE, NEARBY_REQUEST, NEARBY_SUCCESS, NEARBY_FAILURE } from "./searchTypes";

const initialState = {
    loading: false,
    response: '',
    error: '',
    detailsResponse: '',
    detailsError: '',
    searchList: [],
    nearbyList: [],
    nearbyResponse: "",
    nearbyError: "",
    schDetails: {},
    features: [],
    access: [],
    vat: 0,
    images: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                vat: 0,
                searchList: [],
                error: '',
                vat: 0
            }


        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.payload.response,
                searchList: action.payload.list,
                error: '',
                vat: action.payload.vat
            }


        case SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                response: "",
                error: action.payload,
                searchList: [],
                vat: 0
            }



        case NEARBY_REQUEST:
            return {
                ...state,
                loading: true,
                vat: 0,
                nearbyList: [],
                nearbyError: '',
                vat: 0
            }


        case NEARBY_SUCCESS:
            return {
                ...state,
                loading: false,
                nearbyResponse: action.payload.response,
                nearbyList: action.payload.list,
                nearbyError: '',
                vat: action.payload.vat
            }


        case NEARBY_FAILURE:
            return {
                ...state,
                loading: false,
                nearbyResponse: "",
                nearbyError: action.payload,
                nearbyList: [],
                vat: 0
            }


        case SEARCH_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                vat: 0
            }

        case SEARCH_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                detailsResponse: action.payload.response,
                detailsError: '',
                schDetails: action.payload.details,
                vat: action.payload.vat,
                features: action.payload.features,
                access: action.payload.access,
                images: action.payload.images,
                measurement_unit: action.payload.measurement_unit,
                used_type: action.payload.used_type
            }


        case SEARCH_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                detailsResponse: "",
                detailsError: action.payload,
                vat: 0
            }
        default:
            return state;
    }

}

export default reducer; 