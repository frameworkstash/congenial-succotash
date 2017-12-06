import React from 'react';
import {
  Comment,
  Form,
  Grid,
  Header,
  Icon,
  Item,
  Segment
} from 'semantic-ui-react';

const CommentsRoot = props => (
  <div>
    <Header as="h5" color="grey">
      DISCUSSION
    </Header>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={5}>
          <Header as="h6">HUNTER</Header>
          <Item.Group link>
            <Item>
              <Item.Content verticalAlign="middle">
                <Icon size="big" name="user circle" />
                <Item.Header>{props.author}</Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={11}>
          <Header as="h6">AUTHOR</Header>
          <Item.Group link>
            <Item>
              <Item.Content verticalAlign="middle">
                <Icon size="big" name="user circle" />
                <Item.Header>{props.author}</Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Segment>
      <Segment basic secondary>
        <Grid>
          <Grid.Column width={1} verticalAlign="middle">
            <Icon size="big" name="user circle" />
          </Grid.Column>
          <Grid.Column width={15}>
            <Form>
              <Form.Field
                placeholder="What do you think of this tutorial..."
                control="textarea"
                rows="1"
              />
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
      <Comment.Group>{props.children}</Comment.Group>
    </Segment>
  </div>
);

export default CommentsRoot;
