import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './navigation';
import posts from './posts';
import post from './post';
import modal from './modal';
import common from './common';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  routing: routerReducer,
  modal,
  navigation,
  posts,
  post,
  common,
  auth,
  profile
});
