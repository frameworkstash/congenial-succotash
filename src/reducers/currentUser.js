import { APP_LOAD, LOGIN } from '../constants/actionTypes';
import cookie from 'react-cookies';

const initialState = {
  isLoggedIn: false,
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: cookie.load('jwt') ? !state.isLoggedIn : state.isLoggedIn,
        data: action.errors ? null : action.payload.user
      };
    case APP_LOAD:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
