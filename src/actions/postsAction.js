import * as types from '../constants/actionTypes';

export const requestPosts = topic => ({
  type: types.REQUEST_POSTS,
  topic
});

export const receivePosts = (topic, json) => ({
  type: types.RECEIVE_POSTS,
  topic,
  posts: json.data.tutorials,
  receivedAt: Date.now()
});

export const fetchPosts = topic => dispatch => {
  dispatch(requestPosts(topic));

  return fetch('/api/tutorials')
    .then(
      response => response.json(),
      error => console.log('An error has occured', error)
    )
    .then(json => dispatch(receivePosts(topic, json)));
};
