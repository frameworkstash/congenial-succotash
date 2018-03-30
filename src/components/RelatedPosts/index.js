import React from 'react';
import { Header, Item, Segment } from 'semantic-ui-react';

const RelatedPosts = props => {
  return (
    <Segment secondary>
      <Item.Group link>
        <Item>
          <Header as="h5">
            <Header.Content>
              {props.tutorial.title}
              <Header.Subheader>Test subheader</Header.Subheader>
            </Header.Content>
          </Header>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default RelatedPosts;
