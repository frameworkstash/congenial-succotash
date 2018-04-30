import * as firebase from 'firebase';
import { firebaseAuth } from '../firebase';
import * as types from '../constants/actionTypes';
import cookie from 'react-cookies';
import { history } from '../store';

const oAuth = provider => {
  return firebaseAuth.signInWithRedirect(provider);
};

const setToken = token => {
  cookie.save('jwt', token);
};

export const current = user => dispatch => {
  return fetch('/api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      auth: {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        providerId: user.providerId,
        uid: user.uid
      }
    })
  })
    .then(
      response => response.json(),
      error => console.log('An error has occured', error)
    )
    .then(json => {
      setToken(json.data.user.jwt_token);
      dispatch(signInSuccess(json));
    });
};

export const signOut = () => dispatch => {
  return firebaseAuth.signOut().then(() => {
    cookie.remove('jwt');
    history.push('/');
    dispatch(signOutSuccess());
  });
};

export const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS
});

export const signInSuccess = result => ({
  type: types.SIGN_IN_SUCCESS,
  payload: result.data.user
});

export const signInError = error => ({
  type: types.SIGN_IN_ERROR,
  payload: error
});

export const signInWithGithub = () => {
  return oAuth(new firebase.auth.GithubAuthProvider());
};

export const signInWithFacebook = () => {
  return oAuth(new firebase.auth.FacebookAuthProvider());
};

export const signInWithTwitter = () => {
  return oAuth(new firebase.auth.TwitterAuthProvider());
};
