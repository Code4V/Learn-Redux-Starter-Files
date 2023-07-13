import { createStore, compse, applyMiddleware, combineReducers, compose } from 'redux';
import * as thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
    posts,
    comments
};

const enhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
;

const store = createStore(rootReducer,defaultState, enhancers(applyMiddleware(thunk.default)));

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot)
{
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;

//TEST