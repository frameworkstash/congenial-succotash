import {
  REQUEST_INDIVIDUAL_POST,
  RECEIVE_INDIVIDUAL_POST,
  ADD_COMMENT
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  data: {}
};

const addComment = (state, action) => {
  const { payload } = action;
  const { postId, commentId, comment } = payload;

  // Look up the correct post, to simplify the rest of the code
  const post = state.data.entities.tutorials[postId];

  return {
    ...state,
    data: {
      ...state.data,
      entities: {
        ...state.data.entities,
        // Update our Tutorials object with a new "comments" array
        tutorials: {
          [postId]: {
            ...post,
            comments: post.comments.concat(commentId)
          }
        },
        // Update our Comments object with a new "comments" object
        comments: {
          ...state.data.entities.comments,
          [commentId]: comment
        }
      }
    }
  };
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
        data: action.post
      };
    case ADD_COMMENT:
      return addComment(state, action);
    default:
      return state;
  }
};
