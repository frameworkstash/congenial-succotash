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
  post: normalize(json.data.tutorial, schema.tutorial),
  receivedAt: Date.now
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
  dispatch(requestIndividualPost(id));

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
      dispatch(receiveIndividualPost(id, json));
    });
};
