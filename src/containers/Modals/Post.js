import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalRoot from '../../components/ModalRoot';
import PostSocialShare from '../../components/PostSocialShare';
import CommentsRoot from '../../components/CommentsRoot';
import IndividualComment from '../../components/IndividualComment';
import RelatedPosts from '../../components/RelatedPosts';
import { addComment } from '../../actions/commentActions';

import {
  Advertisement,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  Modal,
  Segment
} from 'semantic-ui-react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = e => this.setState({ input: e.target.value });

  handleCommentSubmit = comment => e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(addComment(this.props.data.result, comment));
    this.props.isFetching ? null : this.setState({ input: '' });
  };

  getPostsComments = (entities, currentPostById) => {
    return entities.tutorials[currentPostById].comments.map(
      commentById => entities.comments[commentById]
    );
  };

  render() {
    if (this.props.isFetching) {
      return (
        <ModalRoot size="large">
          <Modal.Content>
            <p>Loading...</p>
          </Modal.Content>
        </ModalRoot>
      );
    }
    return (
      <ModalRoot size="large">
        <Modal.Content>
          <Modal.Description>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2">
                    {
                      this.props.data.entities.tutorials[this.props.data.result]
                        .title
                    }
                    <Header.Subheader>
                      {
                        this.props.data.entities.tutorials[
                          this.props.data.result
                        ].description
                      }
                    </Header.Subheader>
                  </Header>
                  <Label>
                    {
                      this.props.data.entities.tutorials[this.props.data.result]
                        .skill_level
                    }
                  </Label>
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

                  <PostSocialShare
                    description={
                      this.props.data.entities.tutorials[this.props.data.result]
                        .description
                    }
                  />

                  <CommentsRoot
                    input={this.state.input}
                    handleChange={this.handleChange}
                    author={
                      this.props.data.entities.users[
                        this.props.data.entities.tutorials[
                          this.props.data.result
                        ].author
                      ].name
                    }
                    isFetching={this.props.commentRequest}
                    fetchComment={this.handleCommentSubmit}
                  >
                    {this.getPostsComments(
                      this.props.data.entities,
                      this.props.data.result
                    ).map(comment => {
                      return (
                        <IndividualComment
                          key={comment.id}
                          comment={comment.content}
                          totalLikes={comment.total_likes}
                        />
                      );
                    })}
                  </CommentsRoot>
                </Grid.Column>
                {/* End First Column */}

                {/* Second Column */}
                <Grid.Column width={5}>
                  {/* <Divider /> */}
                  <Label as="a" color="green" size="big">
                    <Icon name="caret up" />
                    UPVOTE
                    <Label.Detail>
                      {
                        this.props.data.entities.tutorials[
                          this.props.data.result
                        ].total_likes
                      }
                    </Label.Detail>
                  </Label>
                  <Divider />

                  <Segment>
                    <Header as="h5">
                      <Icon name="browser" />
                      <Header.Content>
                        Website
                        <Header.Subheader>
                          {
                            this.props.data.entities.tutorials[
                              this.props.data.result
                            ].website
                          }
                        </Header.Subheader>
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
        </Modal.Content>
      </ModalRoot>
    );
  }
}

const mapStateToProps = state => ({
  ...state.post
});

export default connect(mapStateToProps)(Post);
