import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './navigation';
import posts from './posts';
import modal from './modal';

export default combineReducers({
  routing: routerReducer,
  navigation,
  posts,
  modal
});
