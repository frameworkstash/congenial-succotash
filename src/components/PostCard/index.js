import React from 'react';
import { Button, Icon, Item, Label, Segment } from 'semantic-ui-react';

const PostCard = props => (
  <Segment onClick={props.openModal(props.id)} attached>
    <Item.Group link unstackable>
      <Item>
        <Item.Content>
          <Item.Header>{props.title}</Item.Header>
          <Item.Meta>{props.description}</Item.Meta>
          <Item.Extra>
            <Label>{props.skillLevel}</Label>
            <Button basic icon compact size="tiny" floated="right">
              <Icon name="comments" />
              {props.totalComments}
            </Button>
            <Button
              {...(props.upvoted ? { color: 'blue' } : { basic: true })}
              icon
              compact
              size="tiny"
              floated="right"
            >
              <Icon name="heart" />
              {props.totalLikes}
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
);

export default PostCard;
