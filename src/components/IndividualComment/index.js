import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

const IndividualComment = props => (
  <Comment>
    <Comment.Avatar />
    <Comment.Content>
      <Comment.Author as="a">Test User</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>
        <p>{props.comment.attributes.content}</p>
      </Comment.Text>
      <Comment.Actions>
        <Comment.Action>
          <Icon name="caret up" />
          {`UPVOTE (${props.comment.total_likes})`}
        </Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default IndividualComment;
