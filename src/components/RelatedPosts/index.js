import React from 'react';
import { Header, Item, Segment } from 'semantic-ui-react';

const related = [];
for (let i = 0; i < 8; i++) {
  related.push(
    <Segment key={i} secondary>
      <Item.Group link>
        <Item>
          <Header as="h5">
            <Header.Content>
              Test header
              <Header.Subheader>Test subheader</Header.Subheader>
            </Header.Content>
          </Header>
        </Item>
      </Item.Group>
    </Segment>
  );
}
const RelatedPosts = () => [related];

export default RelatedPosts;
