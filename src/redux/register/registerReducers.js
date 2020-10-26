import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE} from "./registerTypes"

const initialState = {
    loading: false,
    response: '',
    error: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true
            }


        case REGISTER_USER_SUCCESS:
            return {
                loading: false,
                response: action.payload,
                error: ''
            }


        case REGISTER_USER_FAILURE:
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