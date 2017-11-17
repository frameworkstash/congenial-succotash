import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './navigation';

export default combineReducers({
  routing: routerReducer,
  navigation
});
