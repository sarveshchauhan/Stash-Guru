import { CG_INFO_FAILURE, CG_INFO_REQUEST, CG_INFO_SUCCESS, CHAT_GROUP_FAILURE, CHAT_GROUP_REQUEST, CHAT_GROUP_SUCCESS, MESSAGE_FAILURE, MESSAGE_REQUEST, MESSAGE_SUCCESS, PUSH_MESSAGE_INTO_LIST, SET_CURRENT_CHATGROUP, SET_CURRENT_GUEST_EMAIL, SET_CURRENT_HOST_EMAIL, SET_CURRENT_LISTID } from "./chatTypes";

const initialState = {

    chatGroupList: "",
    chatGroupListLoading: false,
    chatGroupListError: "",

    messageList: "",
    messageListLoading: false,
    messageListError: "",

    currentChatGroupId: "",
    currentListId: "",
    currentGuestEmail: "",
    currentHostEmail: "",

    cgInfo: "",
    cgInfoLoading: false,
    cgInfoError: ""

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case CHAT_GROUP_REQUEST:
            return {
                ...state,
                chatGroupListLoading: true
            }

        case CHAT_GROUP_SUCCESS:
            return {
                ...state,
                chatGroupListLoading: false,
                chatGroupList: action.payload
            }

        case CHAT_GROUP_FAILURE:
            return {
                ...state,
                chatGroupListLoading: false,
                chatGroupListError: action.payload
            }

        case MESSAGE_REQUEST:
            return {
                ...state,
                messageListLoading: true
            }

        case MESSAGE_SUCCESS:
            return {
                ...state,
                messageListLoading: false,
                messageList: action.payload
            }

        case MESSAGE_FAILURE:
            return {
                ...state,
                messageListLoading: false,
                messageListError: action.payload
            }

        case SET_CURRENT_CHATGROUP:
            return {
                ...state,
                currentChatGroupId: action.payload
            }

        case SET_CURRENT_LISTID:
            return {
                ...state,
                currentListId: action.payload
            }

        case SET_CURRENT_HOST_EMAIL:
            return {
                ...state,
                currentHostEmail: action.payload

            }

        case SET_CURRENT_GUEST_EMAIL:
            return {
                ...state,
                currentGuestEmail: action.payload
            }

        case PUSH_MESSAGE_INTO_LIST:
            return {
                ...state,
                messageList: [...state.messageList, action.payload]
            }

        case CG_INFO_REQUEST:
            return {
                ...state,
                cgInfoLoading: true
            }

        case CG_INFO_SUCCESS:
            return {
                ...state,
                cgInfoLoading: false,
                cgInfo: action.payload
            }

        case CG_INFO_FAILURE:
            return {
                ...state,
                cgInfoLoading: false,
                cgInfoError: action.payload
            }


        default:
            return state;
    }

}

export default reducer; 