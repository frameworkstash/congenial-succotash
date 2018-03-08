import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  activePostById: [],
  data: {}
};

const post = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
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
