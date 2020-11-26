import axios from 'axios'
import { config } from '../../config/config';
import { CHAT_GROUP_FAILURE, CHAT_GROUP_REQUEST, CHAT_GROUP_SUCCESS, MESSAGE_FAILURE, MESSAGE_REQUEST, MESSAGE_SUCCESS, PUSH_MESSAGE_INTO_LIST, PUSH_REMOTE_CHAT, SET_CURRENT_CHATGROUP, SET_CURRENT_GUEST_EMAIL, SET_CURRENT_HOST_EMAIL, SET_CURRENT_LISTID } from './chatTypes';
import store from './../store';

const chatGroupRequest = () => {
    return {
        type: CHAT_GROUP_REQUEST
    }
}

const chatGroupSuccess = (response) => {
    return {
        type: CHAT_GROUP_SUCCESS,
        payload: response
    }
}

const chatGroupFailure = (response) => {
    return {
        type: CHAT_GROUP_FAILURE,
        payload: response
    }
}

const setCurrentChatGroup = (response) => {

    return {
        type: SET_CURRENT_CHATGROUP,
        payload: response
    }

}

const setCurrentHostEmail = (response) => {
    return {
        type: SET_CURRENT_HOST_EMAIL,
        payload: response
    }
}

const setCurrentGuestEmail = (response) => {
    return {
        type: SET_CURRENT_GUEST_EMAIL,
        payload: response
    }
}


export const getChatGroupList = (reqData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(chatGroupRequest())
        await axios.post(`${config.apiUrl}/front/chat/list`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    if (serverResponse.list.length > 0) {
                        dispatch(getChatMessageList({
                            token: JSON.parse(localStorage.getItem("stashGuruToken")),
                            chat_id: serverResponse.list[0].cg_id,
                            list_id: serverResponse.list[0].store_id,
                            host_email: serverResponse.list[0].host_email,
                            guest_email: serverResponse.list[0].guest_email,
                        }))
                    }

                    dispatch(chatGroupSuccess(serverResponse.list));

                }
                else {
                    dispatch(chatGroupFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(chatGroupFailure(errorMsg));

            });
    }

}






const messageRequest = () => {
    return {
        type: MESSAGE_REQUEST
    }
}

const messageSuccess = (response) => {
    return {
        type: MESSAGE_SUCCESS,
        payload: response
    }
}

const messageFailure = (response) => {
    return {
        type: MESSAGE_FAILURE,
        payload: response
    }
}


export const setCurrentListId = (response) => {
    return {
        type: SET_CURRENT_LISTID,
        payload: response
    }
}


export const getChatMessageList = (reqData) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(messageRequest())
        await axios.post(`${config.apiUrl}/front/chat/message`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(setCurrentChatGroup(reqData.chat_id));
                    dispatch(setCurrentListId(reqData.list_id));
                    dispatch(setCurrentHostEmail(reqData.host_email));
                    dispatch(setCurrentGuestEmail(reqData.guest_email));
                    dispatch(messageSuccess(serverResponse.list));


                }
                else {
                    dispatch(messageFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(messageFailure(errorMsg));

            });
    }

}


export const pushMessageIntoList = (response) => {

    return {
        type: PUSH_MESSAGE_INTO_LIST,
        payload: response
    }

}


export const pushRemoteChat = (response) => {

    return (dispatch) => {

        if (+store.getState().chat.currentChatGroupId === +response.cg_id) {

            dispatch(pushMessageIntoList(response));

        }


    }



}
