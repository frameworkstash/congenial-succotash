import React from 'react';
import { Button, Icon, Item, Label, Popup, Segment } from 'semantic-ui-react';

const PostCard = props => (
  <Segment attached>
    <Item.Group link unstackable>
      <Item>
        <Item.Content>
          <Item.Header>{props.title}</Item.Header>
          <Item.Meta>{props.description}</Item.Meta>
          <Item.Extra>
            <Label>Label</Label>
            <Popup
              trigger={<span>+ 1</span>}
              content={<Label>Label</Label>}
              on="click"
              position="right center"
            />
            <Button basic icon compact size="tiny" floated="right">
              <Icon name="comments" />
              {props.totalComments}
            </Button>
            <Button basic icon compact size="tiny" floated="right">
              <Icon name="like" />
              {props.totalLikes}
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
);

export default PostCard;
