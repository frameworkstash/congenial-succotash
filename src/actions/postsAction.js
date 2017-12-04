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

export const requestIndividualPost = id => ({
  type: types.REQUEST_INDIVIDUAL_POST,
  id
});

export const receiveIndividualPost = (id, json) => ({
  type: types.RECEIVE_INDIVIDUAL_POST,
  id,
  post: json.data.tutorial,
  receivedAt: Date.now
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

export const fetchPost = id => dispatch => {
  dispatch(requestIndividualPost(id));

  return fetch(`/api/tutorials/${id}`)
    .then(
      response => response.json(),
      error => console.log('An error has occured', error)
    )
    .then(json => dispatch(receiveIndividualPost(id, json)));
};
