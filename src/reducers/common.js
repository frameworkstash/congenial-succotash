import { APP_LOAD } from '../constants/actionTypes';

const initialState = {
  appName: 'Frameworkstash',
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true
      };
    default:
      return state;
  }
};
