import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  items: []
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
        items: action.posts
      };
    default:
      return state;
  }
};
