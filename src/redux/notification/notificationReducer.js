import { INSERT_NOTIFICATION, NOTIFICATION_FAILURE, NOTIFICATION_LIST, NOTIFICATION_REQUEST, SET_NOTIFICATION_COUNT } from "./notificationTypes";

const initialState = {

    notificationLoading: false,
    notificationList: [],
    notificationError: "",

    notificationCount: 0


}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case NOTIFICATION_REQUEST:
            return {
                ...state,
                notificationLoading: true
            }

        case NOTIFICATION_LIST:
            return {
                ...state,
                notificationLoading: false,
                notificationList: action.payload
            }

        case NOTIFICATION_FAILURE:
            return {
                ...state,
                notificationLoading: false,
                notificationError: action.payload
            }

        case SET_NOTIFICATION_COUNT:
            return {
                ...state,
                notificationCount: +action.payload
            }

        case INSERT_NOTIFICATION:
            return {
                ...state,
                notificationList: [action.payload, ...state.notificationList],
                notificationCount: +state.notificationCount + 1
            }



        default:
            return state;
    }

}

export default reducer; 