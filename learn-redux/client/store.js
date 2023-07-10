import { createStore, compse, applyMiddleware, combineReducers } from 'redux';
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

const store = createStore(rootReducer,defaultState, applyMiddleware(thunk.default));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

//TEST