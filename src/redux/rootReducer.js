import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import registerReducer from './register/registerReducers';
import searchReducer from './search/searchReducers';
import listspaceReducer from './listspace/listspaceReducers';


export default combineReducers({
    auth: authReducer,
    register: registerReducer,
    search: searchReducer,
    listspace: listspaceReducer

});