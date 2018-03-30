import { schema } from 'normalizr';

const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  commenter: user
});
const related_tutorials = new schema.Entity('related_tutorials', {
  author: user
});
export const tutorial = new schema.Entity('tutorials', {
  author: user,
  comments: [comment],
  related_tutorials: [related_tutorials]
});

export const arrayOfTutorials = [tutorial];
