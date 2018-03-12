import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalRoot from '../../components/ModalRoot';
import PostSocialShare from '../../components/PostSocialShare';
import CommentsRoot from '../../components/CommentsRoot';
import IndividualComment from '../../components/IndividualComment';
import RelatedPosts from '../../components/RelatedPosts';
import { fetchComment } from '../../actions/commentActions';
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

    dispatch(fetchComment(this.props.item.id, comment));
    this.props.isFetching ? null : this.setState({ input: '' });
  };

  render() {
    const post = this.props.data.tutorials[this.props.activePostById];
    const { title, description, website, skill_level, total_likes } = post;
    const { comments } = post;

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

                    <CommentsRoot
                      input={this.state.input}
                      handleChange={this.handleChange}
                      author={this.props.data.users[post.author].name}
                      isFetching={this.props.commentRequest}
                      fetchComment={this.handleCommentSubmit}
                    >
                      {comments.map(id => {
                        return (
                          <IndividualComment
                            key={this.props.data.comments[id].id}
                            comment={this.props.data.comments[id].content}
                            totalLikes={
                              this.props.data.comments[id].total_likes
                            }
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
                      <Label.Detail>{total_likes}</Label.Detail>
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
  isFetching: state.posts.isFetching,
  // commentRequest: state.post.commentRequest,
  activePostById: state.posts.activePostById,
  data: state.posts.data.entities
});

export default connect(mapStateToProps)(Post);
