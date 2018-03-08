import { schema } from 'normalizr';

const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  commenter: user
});
export const tutorial = new schema.Entity('tutorials', {
  author: user,
  comments: [comment]
});

export const arrayOfTutorials = [tutorial];
