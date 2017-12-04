import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalRoot from '../../components/ModalRoot';
import {
  Advertisement,
  Button,
  Comment,
  Divider,
  Grid,
  Header,
  Icon,
  Item,
  Label,
  Modal,
  Segment
} from 'semantic-ui-react';

class Post extends Component {
  render() {
    const { title, description, website, skill_level, author } =
      this.props.item.attributes || '';
    const { comments } = this.props.item.relationships || [];
    return (
      <ModalRoot size="large">
        <Modal.Content>
          {this.props.isFetching ? (
            <p>Loading...</p>
          ) : (
            <Modal.Description>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Header as="h2">
                      {title}
                      <Header.Subheader>{description}</Header.Subheader>
                    </Header>
                    <Label>{skill_level}</Label>
                  </Grid.Column>

                  <Grid.Column verticalAlign="middle">
                    <Button
                      floated="right"
                      color="orange"
                      size="large"
                      animated
                      basic
                    >
                      <Button.Content visible>View Full Page</Button.Content>
                      <Button.Content hidden>
                        <Icon name="right arrow" />
                      </Button.Content>
                    </Button>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={11}>
                    <Segment basic>
                      <Grid>
                        <Advertisement unit="leaderboard" test="Ad Unit 2" />
                      </Grid>
                    </Segment>

                    <Segment>
                      <Button color="twitter" compact>
                        <Icon name="twitter" /> TWEET
                      </Button>
                      <Button color="facebook" compact>
                        <Icon name="facebook" /> SHARE
                      </Button>
                      <Divider />
                      {description}
                    </Segment>

                    <Segment basic>
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
                                  <Item.Header>{author}</Item.Header>
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
                                  <Item.Header>{author}</Item.Header>
                                </Item.Content>
                              </Item>
                            </Item.Group>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>

                      <Comment.Group>
                        {comments.map(comment => {
                          return (
                            <Comment key={comment.id}>
                              <Comment.Avatar />
                              <Comment.Content>
                                <Comment.Author as="a">Matt</Comment.Author>
                                <Comment.Metadata>
                                  <div>Today at 5:42PM</div>
                                </Comment.Metadata>
                                <Comment.Text>
                                  {comment.attributes.content}
                                </Comment.Text>
                              </Comment.Content>
                            </Comment>
                          );
                        })}
                      </Comment.Group>
                    </Segment>
                  </Grid.Column>

                  <Grid.Column width={5}>
                    {/* <Divider /> */}
                    <Label as="a" color="orange" size="big">
                      <Icon name="caret up" />
                      UPVOTE
                      <Label.Detail>{this.props.item.total_likes}</Label.Detail>
                    </Label>
                    <Divider />

                    <Segment>
                      <Header as="h5">
                        <Icon name="browser" />
                        <Header.Content>
                          Website
                          <Header.Subheader>{website}</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Segment>

                    <Divider />

                    <Segment basic>
                      <Header as="h5" color="grey">
                        RELATED TUTORIALS
                      </Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>

                {/* <Grid.Row>
                  <Grid.Column stretched>
                    <Advertisement unit='large leaderboard' test='Ad Unit 2' centered />
                  </Grid.Column>
                </Grid.Row> */}
              </Grid>
            </Modal.Description>
          )}
        </Modal.Content>
      </ModalRoot>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  item: state.posts.item
});

export default connect(mapStateToProps)(Post);
