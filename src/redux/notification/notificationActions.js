import axios from 'axios'
import { config } from '../../config/config';
import { validateClientToken } from '../../helpers/tokenHelpers';
import store from '../store';
import Swal from 'sweetalert2';
import { CLEAR_MESSAGE_FAILURE, CLEAR_MESSAGE_REQUEST, CLEAR_MESSAGE_SUCCESS, INSERT_NOTIFICATION, NOTIFICATION_FAILURE, NOTIFICATION_LIST, NOTIFICATION_REQUEST, SET_NOTIFICATION_COUNT, UNSEEN_MESSAGE_FAILURE, UNSEEN_MESSAGE_REQUEST, UNSEEN_MESSAGE_SUCCESS } from './notificationTypes';



const notificationRequest = () => {
    return {
        type: NOTIFICATION_REQUEST
    }
}

const notificationList = (response) => {
    return {
        type: NOTIFICATION_LIST,
        payload: response
    }
}

const notificationFailure = (response) => {
    return {
        type: NOTIFICATION_FAILURE,
        payload: response
    }
}


export const getNotificationList = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(notificationRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/users/notifications`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    dispatch(notificationList(serverResponse.data));

                }
                else {
                    dispatch(notificationFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(notificationFailure(errorMsg));

            });
    }

}




const setNotificationCount = (response) => {
    return {
        type: SET_NOTIFICATION_COUNT,
        payload: response
    }
}


export const clearNotificationList = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(notificationRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/users/clear_notifications`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {
                    dispatch(setNotificationCount(0));
                    return true;

                }
                else {
                    dispatch(notificationFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(notificationFailure(errorMsg));

            });
    }

}




export const getNotificationCount = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(notificationRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/users/unseen_notifications`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {

                    dispatch(setNotificationCount(serverResponse.data.count));


                }
                else {
                    dispatch(notificationFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(notificationFailure(errorMsg));

            });
    }

}


export const insertNotification = (response) => {

    return {
        type: INSERT_NOTIFICATION,
        payload: response
    }
}






const unseenMessageRequest = () => {
    return {
        type: UNSEEN_MESSAGE_REQUEST
    }
}

const unseenMessageSuccess = (response) => {
    return {
        type: UNSEEN_MESSAGE_SUCCESS,
        payload: response
    }
}

const unseenMessageFailure = (response) => {
    return {
        type: UNSEEN_MESSAGE_FAILURE,
        payload: response
    }
}


export const getUnseenMessageList = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(unseenMessageRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/users/unseen_messages`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    dispatch(unseenMessageSuccess(serverResponse.data));

                }
                else {
                    dispatch(unseenMessageFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(unseenMessageFailure(errorMsg));

            });
    }

}






const clearMessageRequest = () => {
    return {
        type: CLEAR_MESSAGE_REQUEST
    }
}

const clearMessageSuccess = (response) => {
    return {
        type: CLEAR_MESSAGE_SUCCESS,
        payload: response
    }
}

const clearMessageFailure = (response) => {
    return {
        type: CLEAR_MESSAGE_FAILURE,
        payload: response
    }
}


export const clearUnseenMessages = (reqData = {}) => {

    const requestConfig = {
        'Content-Type': 'application/json'
    };

    return async (dispatch) => {
        dispatch(clearMessageRequest());

        reqData.token = await validateClientToken();

        await axios.post(`${config.apiUrl}/front/users/clear_messages`, reqData, requestConfig)
            .then(response => {
                const serverResponse = response.data;
                if (+serverResponse.status) {


                    dispatch(clearMessageSuccess(serverResponse.data));

                }
                else {
                    dispatch(clearMessageFailure(serverResponse.message));
                }

            }).catch(error => {
                const errorMsg = error.message;
                dispatch(clearMessageFailure(errorMsg));

            });
    }

}


export const callUnseenList = (cg_id) => {

    return (dispatch) => {

        alert(JSON.stringify(store.getState().notification.notificationList));
        dispatch(getUnseenMessageList());
    }

}


