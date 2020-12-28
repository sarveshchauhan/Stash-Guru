import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

import thunk from 'redux-thunk';

let middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}


const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store; 