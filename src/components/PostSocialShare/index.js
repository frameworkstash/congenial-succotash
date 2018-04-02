import React from 'react';
import moment from 'moment';
import { Button, Divider, Icon, Segment } from 'semantic-ui-react';

const PostSocialShare = props => (
  <Segment>
    <Button color="twitter" compact>
      <Icon name="twitter" /> TWEET
    </Button>
    <Button color="facebook" compact>
      <Icon name="facebook" /> SHARE
    </Button>
    <Button size="tiny" floated="right" disabled compact>
      {`POSTED ${moment(props.date)
        .fromNow()
        .toUpperCase()}`}
    </Button>
    <Divider />
    {props.description}
  </Segment>
);

export default PostSocialShare;
