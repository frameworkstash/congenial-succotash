export const currentUser = uid => {
  return fetch(`/api/users/${uid}`)
    .then(
      response => response.json(),
      error => console.log('An error has occured', error)
    )
    .then(json => console.log(json));
};
