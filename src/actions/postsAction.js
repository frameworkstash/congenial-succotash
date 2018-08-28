import { normalize } from 'normalizr';
import * as schema from './schema';
import * as types from '../constants/actionTypes';

export const requestPosts = topic => ({
  type: types.REQUEST_POSTS,
  topic
});

export const receivePosts = (topic, json) => ({
  type: types.RECEIVE_POSTS,
  topic,
  response: json.data.tutorials,
  receivedAt: Date.now()
});

export const requestPost = id => ({
  type: types.REQUEST_INDIVIDUAL_POST,
  id
});

export const receivePost = (id, json) => ({
  type: types.RECEIVE_INDIVIDUAL_POST,
  post: normalize(json.data.tutorial, schema.tutorial),
  id
});

export const upvotePostSuccess = (id, json) => ({
  type: types.POST_UPVOTED,
  payload: {
    id,
    response: normalize(json, schema.tutorial)
  }
});

export const fetchPosts = topic => dispatch => {
  dispatch(requestPosts(topic));

  return fetch('/api/tutorials')
    .then(
      response => response.json(),
      error => console.log('An error has occured', error)
    )
    .then(json => {
      console.log(
        'normalized response',
        normalize(json.data.tutorials, schema.arrayOfTutorials)
      );
      dispatch(receivePosts(topic, json));
    });
};

export const fetchPost = id => dispatch => {
  dispatch(requestPost(id));

  return fetch(`/api/tutorials/${id}`)
    .then(
      response => response.json(),
      error => console.log('An error has occured', error)
    )
    .then(json => {
      console.log(
        'normalized response',
        normalize(json.data.tutorial, schema.tutorial)
      );
      dispatch(receivePost(id, json));
    });
};

export const upvotePost = id => dispatch => {
  return fetch(`/api/tutorials/${id}/upvote`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id
    })
  })
    .then(
      response => response.json(),
      error => console.log('An error has occured', error)
    )
    .then(json => {
      console.log(normalize(json, schema.tutorial));
      dispatch(upvotePostSuccess(id, json));
    });
};
