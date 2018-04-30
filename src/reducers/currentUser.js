import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../constants/actionTypes';
import cookie from 'react-cookies';

const initialState = {
  isLoggedIn: false,
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: cookie.load('jwt') ? !state.isLoggedIn : state.isLoggedIn,
        data: action.payload
      };
    case SIGN_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
