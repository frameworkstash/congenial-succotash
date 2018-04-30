import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './navigation';
import posts from './posts';
import post from './post';
import modal from './modal';
import currentUser from './currentUser';
import common from './common';

export default combineReducers({
  routing: routerReducer,
  modal,
  navigation,
  posts,
  post,
  currentUser,
  common
});
