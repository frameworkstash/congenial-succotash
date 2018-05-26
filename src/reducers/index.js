import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { LOGOUT } from '../constants/actionTypes';
import navigation from './navigation';
import posts from './posts';
import post from './post';
import modal from './modal';
import common from './common';
import auth from './auth';
import profile from './profile';

const appReducer = combineReducers({
  routing: routerReducer,
  modal,
  navigation,
  posts,
  post,
  common,
  auth,
  profile
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
