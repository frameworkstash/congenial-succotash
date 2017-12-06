import React from 'react';
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
      FEATURED 9 HOURS AGO
    </Button>
    <Divider />
    {props.description}
  </Segment>
);

export default PostSocialShare;
