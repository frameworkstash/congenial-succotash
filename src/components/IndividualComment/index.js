import React from 'react';
import moment from 'moment';
import { Comment, Icon } from 'semantic-ui-react';

const IndividualComment = props => (
  <Comment>
    <Comment.Avatar />
    <Comment.Content>
      <Comment.Author as="a">Test User</Comment.Author>
      <Comment.Metadata>
        <div>
          {moment(props.date).fromNow()} at {moment(props.date).format('LT')}
        </div>
      </Comment.Metadata>
      <Comment.Text>
        <p>{props.comment}</p>
      </Comment.Text>
      <Comment.Actions>
        <Comment.Action>
          <Icon name="caret up" />
          UPVOTE {props.totalLikes > 0 && props.totalLikes}
        </Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default IndividualComment;
