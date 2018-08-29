import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Input,
  Progress,
  Segment
} from 'semantic-ui-react';

class NewPostForm extends Component {
  render() {
    return (
      <DocumentTitle title="Post something new">
        <Container>
          <Grid padded="vertically">
            <Grid.Row>
              <Grid.Column>
                <Header as="h1">Post something new</Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={12}>
                <Segment padded="very" clearing>
                  <Progress
                    size="medium"
                    value="1"
                    total="3"
                    progress="ratio"
                    label="1. Link"
                    indicating
                  />
                  <Divider />
                  <Form>
                    <Form.Field required>
                      <label>Link</label>
                      <Input
                        placeholder="Paste a URL (e.g https://medium.com)"
                        focus
                        transparent
                      />
                    </Form.Field>
                    <Button color="blue" type="submit" floated="right" disabled>
                      next
                    </Button>
                  </Form>
                </Segment>
              </Grid.Column>

              <Grid.Column width={4}>
                <Segment />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </DocumentTitle>
    );
  }
}

export default NewPostForm;
