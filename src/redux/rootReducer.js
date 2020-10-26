import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import registerReducer from './register/registerReducers';

export default combineReducers({
    auth: authReducer,
    register: registerReducer
});