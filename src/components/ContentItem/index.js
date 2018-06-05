import React, { Component } from 'react';
import { Button, Icon, Item, Label, Segment } from 'semantic-ui-react';

class ContentItem extends Component {
  render() {
    return (
      <Segment attached>
        <Item.Group link unstackable>
          <Item>
            <Item.Content>
              <Item.Header>{this.props.title}</Item.Header>
              <Item.Meta>{this.props.description}</Item.Meta>
              <Item.Extra>
                <Label>{this.props.skillLevel}</Label>
                <Button basic icon compact size="tiny" floated="right">
                  <Icon name="comments" />
                  {this.props.totalComments}
                </Button>
                <Button
                  {...(this.props.upvoted
                    ? { color: 'blue' }
                    : { basic: true })}
                  icon
                  compact
                  size="tiny"
                  floated="right"
                >
                  <Icon name="heart" />
                  {this.props.totalLikes}
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}

export default ContentItem;
