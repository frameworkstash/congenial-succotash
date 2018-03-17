import * as types from '../constants/actionTypes';

export const addCommentSuccess = (postId, commentText, json) => ({
  type: types.ADD_COMMENT,
  payload: {
    postId,
    commentId: json.data.comment.id,
    comment: json.data.comment
  }
});

export const addComment = (postId, commentText) => dispatch => {
  return fetch(`/api/tutorials/${postId}/comments`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: commentText,
      commentable_type: 'Tutorial',
      commentable_id: postId
    })
  })
    .then(
      response => response.json(),
      error => console.log('An error has occured', error)
    )
    .then(json => dispatch(addCommentSuccess(postId, commentText, json)));
};
