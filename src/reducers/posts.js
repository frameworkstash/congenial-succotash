import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: !state.isFetching
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: !state.isFetching,
        lastUpdated: action.receivedAt,
        data: action.response
      };
    default:
      return state;
  }
};
