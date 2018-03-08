import {
  REQUEST_INDIVIDUAL_POST,
  RECEIVE_INDIVIDUAL_POST,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_RECEIVE
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  commentRequest: false,
  item: [],
  comments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_INDIVIDUAL_POST:
      return {
        ...state,
        isFetching: !state.isFetching
      };
    case RECEIVE_INDIVIDUAL_POST:
      return {
        ...state,
        isFetching: !state.isFetching,
        lastUpdated: action.receivedAt,
        item: action.post,
        comments: action.post.comments
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        commentRequest: !state.commentRequest
      };
    case ADD_COMMENT_RECEIVE:
      console.log(`this is the comment payload... ${action.comment}`);
      return {
        ...state,
        commentRequest: !state.commentRequest,
        comments: [action.comment, ...state.comments]
      };
    default:
      return state;
  }
};
