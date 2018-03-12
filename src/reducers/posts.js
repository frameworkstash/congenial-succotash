import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_INDIVIDUAL_POST,
  RECEIVE_INDIVIDUAL_POST
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  activePostById: [],
  data: {}
};

export const post = (state, action) => {
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
    case REQUEST_INDIVIDUAL_POST:
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: !state.isFetching
      };
    case RECEIVE_INDIVIDUAL_POST:
      return {
        ...state,
        isFetching: !state.isFetching,
        lastUpdated: action.receivedAt,
        activePostById: action.activePost
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
