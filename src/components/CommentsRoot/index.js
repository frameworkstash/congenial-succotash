import React, { Component } from 'react';
import {
  Button,
  Comment,
  Form,
  Grid,
  Header,
  Icon,
  Item,
  Segment
} from 'semantic-ui-react';

class CommentsRoot extends Component {
  render() {
    const { isFetching } = this.props;
    return (
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
                    <Item.Header>Test User</Item.Header>
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
                    <Item.Header>{this.props.author}</Item.Header>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment>
          <Segment basic secondary>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1} verticalAlign="top">
                  <Icon size="big" name="user circle" />
                </Grid.Column>
                <Grid.Column width={15}>
                  <Form onSubmit={this.props.fetchComment(this.props.input)}>
                    <Form.Field
                      placeholder="What do you think of this tutorial..."
                      value={this.props.input}
                      onChange={this.props.handleChange}
                      control="textarea"
                      rows="1"
                    />
                    {this.props.input && (
                      <Button
                        type="submit"
                        content={isFetching ? 'COMMENTING...' : 'COMMENT'}
                        floated="right"
                        color="green"
                        disabled={isFetching}
                      />
                    )}
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Comment.Group>{this.props.children}</Comment.Group>
        </Segment>
      </div>
    );
  }
}

export default CommentsRoot;
