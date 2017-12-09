import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalRoot from '../../components/ModalRoot';
import PostSocialShare from '../../components/PostSocialShare';
import CommentsRoot from '../../components/CommentsRoot';
import IndividualComment from '../../components/IndividualComment';
import RelatedPosts from '../../components/RelatedPosts';
import {
  Advertisement,
  Button,
  Divider,
  Grid,
  Header,
  Icon,
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
                      color="teal"
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
                  {/* First Column */}
                  <Grid.Column width={11}>
                    <Segment basic>
                      <Grid>
                        <Advertisement unit="leaderboard" test="Ad Unit 2" />
                      </Grid>
                    </Segment>

                    <PostSocialShare description={description} />

                    <CommentsRoot author={author}>
                      {comments.map(comment => {
                        return (
                          <IndividualComment
                            key={comment.id}
                            comment={comment}
                          />
                        );
                      })}
                    </CommentsRoot>
                  </Grid.Column>
                  {/* End First Column */}

                  {/* Second Column */}
                  <Grid.Column width={5}>
                    {/* <Divider /> */}
                    <Label as="a" color="teal" size="big">
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

                    <Header as="h5" color="grey">
                      RELATED TUTORIALS
                    </Header>

                    <Segment.Group>
                      <RelatedPosts />
                    </Segment.Group>
                  </Grid.Column>
                </Grid.Row>
                {/* End Second Column */}
              </Grid>
            </Modal.Description>
          )}
        </Modal.Content>
      </ModalRoot>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  item: state.post.item
});

export default connect(mapStateToProps)(Post);
