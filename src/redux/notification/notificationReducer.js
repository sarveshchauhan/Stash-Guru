import { CLEAR_MESSAGE_FAILURE, CLEAR_MESSAGE_REQUEST, CLEAR_MESSAGE_SUCCESS, INSERT_NOTIFICATION, NOTIFICATION_FAILURE, NOTIFICATION_LIST, NOTIFICATION_REQUEST, SET_NOTIFICATION_COUNT, UNSEEN_MESSAGE_FAILURE, UNSEEN_MESSAGE_REQUEST, UNSEEN_MESSAGE_SUCCESS } from "./notificationTypes";

const initialState = {

    notificationLoading: false,
    notificationList: [],
    notificationError: "",

    notificationCount: 0,

    unseenMessageLoading: false,
    unseenMessageList: [],
    unseenMessageError: "",
    unseenMessageCount: 0,


    clearMessageLoading: false,
    clearMessageResponse: "",
    clearMessageError: ""


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

        case UNSEEN_MESSAGE_REQUEST:
            return {
                ...state,
                unseenMessageLoading: true
            }

        case UNSEEN_MESSAGE_SUCCESS:
            return {
                ...state,
                unseenMessageLoading: false,
                unseenMessageList: action.payload,
                unseenMessageCount: action.payload.length
            }

        case UNSEEN_MESSAGE_FAILURE:
            return {
                ...state,
                unseenMessageLoading: false,
                unseenMessageError: action.payload
            }

        case CLEAR_MESSAGE_REQUEST:
            return {
                ...state,
                clearMessageLoading: true
            }

        case CLEAR_MESSAGE_SUCCESS:

            let filteredMessages = state.unseenMessageList.filter((message) => {
                if (+message.cg_id !== +action.payload.cg_id) {
                    return message;
                }
            });

            return {
                ...state,
                clearMessageLoading: false,
                unseenMessageList: filteredMessages,
                unseenMessageCount: filteredMessages.length
            }

        case CLEAR_MESSAGE_FAILURE:
            return {
                ...state,
                clearMessageLoading: false,
                clearMessageError: action.payload
            }


        default:
            return state;
    }

}

export default reducer; 