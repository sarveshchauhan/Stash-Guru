import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE} from "./searchTypes";

const initialState = {
    loading: false,
    response: '',
    error: '',
    list: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            }


        case SEARCH_SUCCESS:
            return {
                loading: false,
                response: action.payload,
                error: '',
                list: []
            }


        case SEARCH_FAILURE:
            return {
                loading: false,
                response: "",
                error: action.payload
            }

        default:
            return state;
    }

}

export default reducer; 