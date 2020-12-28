import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import registerReducer from './register/registerReducers';
import searchReducer from './search/searchReducers';
import listspaceReducer from './listspace/listspaceReducers';
import chatReducer from './chat/chatReducer';
import documentReducer from './document/documentReducer';
import bookingReducer from './booking/bookingReducer';
import walletReducer from './wallet/walletReducer';
import paymentReducer from './payment/paymentReducer';
import notificationReducer from './notification/notificationReducer';
import frontReducer from './front/frontReducer';

export default combineReducers({

    auth: authReducer,
    register: registerReducer,
    search: searchReducer,
    listspace: listspaceReducer,
    chat: chatReducer,
    document: documentReducer,
    booking: bookingReducer,
    wallet: walletReducer,
    payment: paymentReducer,
    notification: notificationReducer,
    front: frontReducer

});