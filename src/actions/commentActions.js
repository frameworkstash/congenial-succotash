import * as types from '../constants/actionTypes';

export const postCommentRequest = (postId, comment) => ({
  type: types.ADD_COMMENT_REQUEST,
  comment,
  postId
});

export const postCommentReceive = (postId, comment, json) => ({
  type: types.ADD_COMMENT_RECEIVE,
  postId,
  comment: json.data.comment,
  receivedAt: Date.now()
});

export const fetchComment = (postId, comment) => dispatch => {
  dispatch(postCommentRequest(postId, comment));

  return fetch(`/api/tutorials/${postId}/comments`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: comment,
      commentable_type: 'Tutorial',
      commentable_id: postId
    })
  })
    .then(
      response => response.json(),
      error => console.log('An error has occured', error)
    )
    .then(json => dispatch(postCommentReceive(postId, comment, json)));
};
